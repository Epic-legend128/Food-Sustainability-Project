const mongoose = require("mongoose");

const foodSchema = {
    title: {
        type: String,
        required: "This field is required"
    },
    image: {
        type: String,
        required: "This field is required"
    },
    desc: {
        type: String,
        required: "This field is required"
    },
    time: {
        type: Number,
        required: "This field is required"
    },
    ingredients: {
        type: Array,
        required: "This field is required"
    },
    nutrients: {
        type: Object,
        requied: "This field is required"
    },
    seasons: {
        type: Array,
        required: "This field is required"
    },
    labels: {
        type: Array,
        required: "This field is required"
    }
};

mongoose.model("Food", foodSchema);

/* 
{
    title: "", //title
    image: "", // url
    desc: "", //description,
    time: null, // estimated time to make in minutes
    ingedients: [{name: "", quantity: null, unit: ""}], //name, quantity and unit of measurement
    nutrients: {calcium: null, proteins: null, calories: null, fats: null, carbs: null, saturates: null, sugars: null, salt: null, fibre: null}, // different nutrients
    seasons: [], //includes a list of all of the seasons it is naturaly produced in
    labels: [] // other labels, like healthy, unhealthy, quick etc
} */