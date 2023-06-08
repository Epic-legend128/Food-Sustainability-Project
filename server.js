require("./models/db");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const User = mongoose.model("User");
const Food = mongoose.model("Food");

const names = ["donation", "info", "index", "form", "browse", "login", "notFound", "logout", "signup", "map", "subscribe", "message"];

const bodyparser = require("body-parser");

const app = express();
require('dotenv').config();

const stripe = require("stripe")(process.env.API_KEY);
PORT = process.env.PORT || 80

const KEYID = "whatIsTheNameOfTheUserForThisWebsite2";
app.set("view engine", "ejs");

app.use(cookieSession({
    name: 'session',
    keys: ["key1", "key2"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(express.static(path.join(__dirname, "/everything/scripts")));
app.use(express.static(path.join(__dirname, "/everything")));
app.set("views", path.join(__dirname, "/everything/scripts"));

app.use(express.json());

//homepage
app.get("/", async (req, res) => {
    if(loggedIn(req.session)) {
        res.render("index", {
            isLoggedIn: loggedIn(req.session),
            subscription: (await User.findOne({ 'username': req.session.username })).subscription
        });
    }
    else{
        res.render("index", {
            isLoggedIn: loggedIn(req.session),
            subscription: "None"
        });
    }
});

app.get("/logout", (req, res) => {
    req.session[KEYID] = "";
    res.redirect("/index");
});

//pages
app.get("/:id", async (req, res) => {
    if (req.params.id == "browse") {
        getAll(req.query).then(async foods => {
            res.render("browse", {
                isLoggedIn: loggedIn(req.session),
                food: foods,
                subscription: loggedIn(req.session) ? (await User.findOne({ 'username': req.session.username })).subscription : "None"
            });
        });
    }
    else if (req.params.id == "login" && loggedIn(req.session)) {
        res.redirect("/index", {  subscription: (await User.findOne({ 'username': req.session.username })).subscription });
    }
    else if (names.includes(req.params.id)) {
        if(req.params.id == "form") {
            if(loggedIn(req.session)) {
                res.render(req.params.id, {
                    isLoggedIn: loggedIn(req.session),
                    subscription: (await User.findOne({ 'username': req.session.username })).subscription
                });
            }
            else {
                if(!loggedIn(req.session) || (await User.findOne({ 'username': req.session.username })).subscription == "None") {
                    res.redirect("/subscribe");
                }
                else {
                    var today = new Date();
                    var dd = String(today.getDate()).padStart(2, '0');
                    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
                    var yyyy = today.getFullYear();
    
                    today = mm + '/' + dd + '/' + yyyy;
    
                    const todayDate = new Date(today);
                    const subscriptionDate = new Date((await User.findOne({ 'username': req.session.username })).subscriptionDate);
                    
                    const diffTime = Math.abs(subscriptionDate - todayDate);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
                    if(diffDays <= 0){ 
                        await User.updateOne({ username: req.session.username }, {
                            subscription: "None"
                        });
    
                        res.redirect("/subscribe");
                    }
                }
            }
        }
        res.render(req.params.id, {
            isLoggedIn: loggedIn(req.session),
            subscription: loggedIn(req.session) ? (await User.findOne({ 'username': req.session.username })).subscription : "None"
        });
    }
});

app.get("/browsing/:name", async (req, res) => {
    if (req.params.name.length == 0) res.redirect("/browse", { subscription: (await User.findOne({ 'username': req.session.username })).subscription});
    getRecipe(req.params.name).then(async recipe => {
        if (recipe != null && recipe != undefined) {
            res.render("recipe", {
                isLoggedIn: loggedIn(req.session),
                recipe: recipe,
                subscription: loggedIn(req.session) ? (await User.findOne({ 'username': req.session.username })).subscription : "None"
            });
        }
        else {
            res.redirect("/notFound");
        }
    });
});

//login post
app.post("/login", bodyparser.urlencoded(), async (req, res) => {
    userId(req.body).then(async id => {
        if (id != null) {
            req.session[KEYID] = id;
            req.session.username = req.body.username;

            //after logging in
            res.redirect("/index");
        }
        else {
            if(loggedIn(req.session)) {
                res.render("login", {
                    isLoggedIn: loggedIn(req.session),
                    subscription: (await User.findOne({ 'username': req.session.username })).subscription
                });
            }
            else{
                res.render("login", {
                    isLoggedIn: loggedIn(req.session),
                    subscription: "None"
                });
            }
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
    let exists = false;
    User.find({}).then(x => {
        for (let i = 0; i<x.length; i++) {
            if (req.body.username == x[i].username) {
                exists = true;
                break;
            }
        }
    }).then(_ => {
        if (!exists) {
            user.username = req.body.username;
            user.password = req.body.password;
            user.subscription = "None";
            user.subscriptionDate = "None";
            user.save().then(x => {
                res.redirect("/login")
            });
        }
        else {
            res.redirect("/signup");
        }
    });
});

app.get("/subscribe", (req, res) => {
    if(loggedIn(req.session)) {
        res.render("subscribe");
    }
    else{
        res.redirect("/login");
    }
});

app.post("/message", async (req, res) => {
    if(loggedIn(req.session)) {
        const subscriptionType = decrypt(req.body.message);

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');

        if(subscriptionType == "monthly"){
            var mm = String(today.getMonth() + 1 + 1).padStart(2, '0'); 
            var yyyy = today.getFullYear();
        }
        else{
            var mm = String(today.getMonth() + 1).padStart(2, '0'); 
            var yyyy = today.getFullYear() + 1;
        }
       
        today = mm + '/' + dd + '/' + yyyy;
        
        await User.updateOne({ username: req.session.username }, {
            subscription: subscriptionType, subscriptionDate: today
        });
    }
    else{
        res.redirect("/login");
    }
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

function decrypt(message){
    var decoded = Buffer.from(message, 'hex').toString();
    var decodedString = atob(decoded);

    return decodedString;
}

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

app.listen(PORT, _ => console.log("Listening on port: " + PORT));