const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchem = new Schema({
    name: String,
    url: String,
    img: String,
    date: Date
});

mongoose.model("Movies", moviesSchem);
