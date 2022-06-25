// Import
let mongoose = require('mongoose');

// Create a model class
let carModel = mongoose.Schema(
    {
        make: String,
        model: String,
        year: Number,
        kilometers: Number,
        doors: Number,
        seats: Number,
        color: String,
        price: Number        
    },
    {
        collection: "cars"
    }
);

module.exports = mongoose.model("Car", carModel);