const { Movies } = require("./mongodb/index.js");

const movie = new Movies({
    name: "再次测试保存123",
    date: new Date()
});
movie.save();

Movies.find({ name: "再次测试保存" }, function(err, data) {
    console.log(data);
});
