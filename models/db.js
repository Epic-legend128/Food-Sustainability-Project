const mongoose = require("mongoose");

require('dotenv').config();

mongoose.connect("mongodb+srv://"+process.env.USERNAME+":"+process.env.PASSWORD+"@data.fvqv3iu.mongodb.net/", {
    useNewUrlParser: true
});

require("./user.model");
require("./food.model");