const mongoose = require("mongoose");

const restaurant = new mongoose.Schema({
    address: {
        building: String,
        coord: Array,
        street: String,
        zipcode: String,
    },
    borough: String,
    cuisine: String,
    grades: [{ date: Date, grade: String, score: Number }],
    name: String,
    restaurant_id: String,
});

const restaurantModel = mongoose.model("restaurant", restaurant);

module.exports = restaurantModel;