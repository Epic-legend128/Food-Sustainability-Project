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

function isSeasonal(seasons) {
    let d = new Date();
    let m = d.getMonth();
    return ((m >= 11 || m<=2 && seasons.includes("winter")) || (m >= 3 && m<=5 && seasons.includes("spring")) || (m >= 6 && m<=8 && seasons.includes("summer")) || (m >= 9 && m<=10 && seasons.includes("autumn")));
}

function getAll(q) {
    let r = [];

    let healthy = q.healthy == "true" ? true : false;
    let quick = q.quick == "true" ? true : false;
    let seasonal = q.seasonal == "true" ? true : false;

    return new Promise((resolve, reject) => {
        Food.find({}).then(foods => {
            Array.from(foods).forEach(x =>  {
                if (q.search == undefined || (((x.labels.includes('healthy') && healthy) || !healthy) && ((x.time < 20 && quick) || !quick) && ((isSeasonal(x.seasons) && seasonal) || !seasonal) && (q.search.length == 0 || q.search.toLowerCase().includes(x.title.toLowerCase()) || q.search.toLowerCase().includes(x.desc.toLowerCase()) || x.desc.toLowerCase().includes(q.search.toLowerCase()) || x.title.toLowerCase().includes(q.search.toLowerCase())))) {
                    r.push(x);
                }
            });
        }).then(_ => {
            resolve(r);
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
    if (req.params.id == "browse") {
        getAll(req.query).then(foods => {
            res.render("browse", {
                isLoggedIn: parseInt(loggedIn(req.session)),
                food: foods
            });
        });
    }
    else if (req.params.id == "login" && parseInt(loggedIn(req.session))) {
        res.redirect("/index");
    }
    else if (names.includes(req.params.id)) {
        res.render(req.params.id, {
            isLoggedIn: parseInt(loggedIn(req.session))
        });
    }
    else {
        res.render("notFound", {
            isLoggedIn: parseInt(loggedIn(req.session))
        });
    }
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
