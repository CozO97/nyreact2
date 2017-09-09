let express = require("express");
let bodyParser = require("body-parser");
let logger = require("morgan");
let mongoose = require("mongoose");


var Article = require("./models/Article");


let app = express();
let PORT = process.env.PORT || 3000;


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));


mongoose.connect("mongodb://localhost/nytreact");
let db = mongoose.connection;

db.on("error", function(err) {
      console.log("Mongoose Error: " + err);
});

db.once("open", function () {
      console.log("MONGOOSE CONNECTION SUCCESS!");
});




app.get("/", function(req,res) {
    res.sendFile(__dirname + "/public/index.html");
});


app.get("/api/saved", function(req,res) {
      Article.find({})
        .sort({"date": -1})
        .limit(5).exec(function(err,doc)
      {
        if (err)
        {
          console.log(err);
        }
        else {
          {
            res.send(doc);
          }
        }
      });
});

app.post("/api/saved", function(req,res) {
    console.log("BODY: " + req.body);

    Article.create({
      title: req.body.snippet,
      date: Date.now(),
      url: req.body.url
    }, function(err) {
      if (err) {
        console.log(err);
      }
      else {
        res.send("Saved Article");
      }
    });
});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});