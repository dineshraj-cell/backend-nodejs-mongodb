let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let app = express();
let Routes = require("./routes"); //all api endpoint are defined in this file

//To handle post requests
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

// Database connection testing with local db url
mongoose.connect("mongodb://localhost:27017/practice", {
    useNewUrlParser: true,
});
var db = mongoose.connection;

if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

//app connection port
var port = process.env.PORT || 8080;

app.use(Routes);

app.listen(process.env.PORT || 8080, function() {
    console.log("Running RestHub on port " + port);
});