const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    _id: Number,
    title: String,
    Author: String,
    Description: String,
    image: String,
}); 
module.exports = mongoose.model("Books", BookSchema);