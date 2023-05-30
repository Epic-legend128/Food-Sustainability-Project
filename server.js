require("./models/db");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const User = mongoose.model("User");
const Food = mongoose.model("Food");

const names = ["donation", "info", "index", "form", "browse", "login", "notFound", "logout", "signup", "map"];

const bodyparser = require("body-parser");

var app = express();
require('dotenv').config();

const stripe = require("stripe")(process.env.API_KEY);
PORT = process.env.PORT || 80

const KEYID = "whatIsTheNameOfTheUserForThisWebsite";

function userId(info) {
    return new Promise((resolve, reject) => {
        User.find({}).then(allUsers => {
            for (let i = 0; i<allUsers.length; i++) {
                let x = allUsers[i];
                if (x.username == info.username && x.password == info.password) {
                    resolve(x._id);
                }
            }
            resolve(null);
        });
    });
}

function getRecipe(name) {
    let title = name.toLowerCase();
    return new Promise((resolve, reject) => {
        Food.find({}).then(allFoods => {
            for (let i = 0; i<allFoods.length; i++) {
                let x = allFoods[i];
                if (x.title.toLowerCase() == title) {
                    resolve(x);
                }
            }
            resolve(null);
        });
    });
}

function loggedIn(session) {
    return (session.hasOwnProperty(KEYID) && session[KEYID] != "") ? 1 : 0;
}

app.set("view engine", "ejs");

app.use(cookieSession({
    name: 'session',
    keys: ["key1", "key2"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(express.static(path.join(__dirname, "/everything/scripts")));
app.use(express.static(path.join(__dirname, "/everything")));
app.set("views", path.join(__dirname, "/everything/scripts"));

//homepage
app.get("/", (req, res) => {
    res.render("index", {
        isLoggedIn: parseInt(loggedIn(req.session))
    });
});

app.get("/logout", (req, res) => {
    req.session[KEYID] = "";
    res.redirect("/index");
});

//pages
app.get("/:id", (req, res) => {
    if (req.params.id == "login" && parseInt(loggedIn(req.session)))
        res.redirect("/index");
    else if (names.includes(req.params.id)) {
        console.log("Went in with id of "+req.params.id);
        res.render(req.params.id, {
            isLoggedIn: parseInt(loggedIn(req.session))
        });
    }
    else
    res.render("notFound", {
        isLoggedIn: parseInt(loggedIn(req.session))
    });
});

app.get("/browsing/:name", (req, res) => {
    if (req.params.name.length == 0) res.redirect("/browse");
    getRecipe(req.params.name).then(recipe => {
        if (recipe != null && recipe != undefined) {
            res.render("recipe", {
                isLoggedIn: parseInt(loggedIn(req.session)),     
                recipe: recipe
            });
        }
        else {
            res.redirect("/notFound");
        }
    });
});

//login post
app.post("/login", bodyparser.urlencoded(), (req, res) => {
    userId(req.body).then(id => {
        if (id != null) {
            req.session[KEYID] = id;

            //after logging in
            res.redirect("/index");
        }
        else {
            res.render("login", {
                incorrect: true,
                isLoggedIn: 0
            });
        }
    });
});

app.get('/delete/:username/:password/:id', (req, res) => {
    userId({username: req.params.username, password: req.params.password, _id: req.params.id}).then(id => {
        if (id != null) {
            User.findByIdAndRemove(req.params.id).then(_ => {
                res.redirect("../../../../index");
            });
        }
        else {
            res.redirect("../../../../index");
        }
    })
});

app.post("/signup", bodyparser.urlencoded(), (req, res) => {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.save().then(x => {
        res.redirect("/login")
    });
});

app.get("/so/you/should/add/this/recipe", (req, res) => {
    Food.insertMany([

    ]).then(_ => {
        res.send("Done, now check the database");
    });
});

//everything else
app.get("*", (req, res) => {
    res.redirect("/notFound");
});

//for the donation
app.post("/charge", bodyparser.urlencoded(), (req, res) => {
    try {
      stripe.customers
        .create({
          name: req.body.name,
          email: req.body.email,
          source: req.body.stripeToken
        })
        .then(customer =>
          stripe.charges.create({
            amount: req.body.amount * 100,
            currency: "usd",
            customer: customer.id
          })
        )
        .then(() => res.send("Thanks for the donation!"))
        .catch(err => console.log(err));
    } catch (err) {
        res.send(err);
    }
});

app.listen(PORT, _ => console.log("Listening on port: " + PORT));




/* var food = new Food();
    food.title = "Gyros";
    food.image = "https://www.kitchensanctuary.com/wp-content/uploads/2017/11/Pork-Gyros-with-Homemade-Tzatziki-square-FS.jpg";
    food.desc = "This Greek traditional street-food is truly a masterpiece. It is very similar to the Turkish kebab but after tasting it you will soon realize why it has an entirely different name. That is of course due to their different flavours.";
    food.time = 10;
    food.ingredients = [{name: "pita", quantity: 1, unit: ""}, {name: "tomato", quantity: 1, unit: ""}, {name: "garlic", quantity: 1, unit: ""}];
    food.nutrients = {calcium: 10, proteins: 10, calories: 10, fats: 10, carbs: 10, saturates: 10, sugars: 14, salt: 63, fibre: 52};
    food.seasons = ['summer', 'winter', 'autumn', 'spring'];
    food.labels = ["healthy"];
    food.save().then(x => {
        res.send("Hello world");
}); */