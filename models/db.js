const mongoose = require("mongoose");

require('dotenv').config();

mongoose.connect("mongodb+srv://fotiosvaitsopoulos:Quietcrow561821@data.fvqv3iu.mongodb.net/", {
    useNewUrlParser: true
});

require("./user.model");
require("./food.model");