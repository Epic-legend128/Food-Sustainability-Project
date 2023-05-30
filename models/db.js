const mongoose = require("mongoose");

require('dotenv').config();

mongoose.connect("mongodb+srv://"+process.env.USERNAME+":"+process.env.PASSWORD+"@cluster.rfww9rl.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

require("./user.model");
require("./food.model");