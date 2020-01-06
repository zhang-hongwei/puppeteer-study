const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/douban", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// const Schema = mongoose.Schema;

// const moviesSchem = new Schema({
//     name: String,
//     url: String,
//     img: String,
//     date: Date
// });

// const Movie = mongoose.model("Movies", moviesSchem);

mongoose.connection.once("open", function(data) {
    console.log("链接成功");
});

require("./schema/movies");

// modexports.Movies = mongoose.model("Movies");

module.exports = {
    Movies: mongoose.model("Movies")
};
