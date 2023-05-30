console.log("In here");

const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

router.use(express.static('/everything'));
router.use(express.static('/everything/scripts'));

//keys for saving info in the localStorage
const KEYB = "isTheUserLoggedInTheWebsiteOrNot";
const KEYID = "whatIsTheNameOfTheUserForThisWebsite";

//checks if the user is valid, returns their id if it is, otherwise it returns null
function userId(req) {
    User.find({}).then(allUsers => {
        for (let i = 0; i<allUsers.length; i++) {
            let x = allUsers[i];
            if (x.username == req.body.username && x.password == req.body.password) {
                return x._id;
            }
        }
    });
    return null;
}

router.get('/', function(req, res) {
    res.render('index');
});

router.get("*", function(req, res) {
    res.render("notFound");
});


router.post("/login.html", (req, res) => {
    console.log("Is inside");
    let userId = userId(req).then(_ => {
        if (userId != null) {
            localStorage.setItem(KEYB, true);
        
            localStorage.setItem(KEYID, userId);
            //figure out where later, probably the homepage I'd say
            // res.redirect();
        }
        else {
            //if the user is invalid, tell them that it is wrong
        }
    });
});

module.exports = router;