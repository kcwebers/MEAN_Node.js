
var express = require("express");
console.log("Let's find out what express is", express);

var app = express();
console.log("Let's find out what app is", app);

app.listen(8000, function() {
  console.log("listening on port 8000");
})

app.use(express.static(__dirname + "/static"));



app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

app.get("/cats", function(request, response){
  response.render('cats');
})
app.get("/mittens", function(request, response){
  sleeping = [
    "Under the bed",
    "In the sun",
    "Next to the fire"
  ]
  response.render('mittens');
})
app.get("/dittens", function(request, response){
  sleeping = [
    "Under the bed",
    "With their homies"
  ]
  response.render('dittens');
})
app.get("/bittens", function(request, response){
  sleeping = [
    "In the lounging room",
    "On the veranda",
    "Outside the servants quarters"
  ]
  response.render('bittens');
})
app.get("/mordecai", function(request, response){
  sleeping = [
    "Beside his weapons stash",
    "On his back",
    "With one foot in his owner's mouth"
  ]
  response.render('mordecai');
})

