var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friends = [];

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
    res.render("index");
});

app.get("/friends", function(req, res){
    res.render("list", {friends:friends});
});

app.post("/friends/add", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});


// LISTENING //
app.listen(3000, function(){
    console.log("Server listening on port 3000");
});