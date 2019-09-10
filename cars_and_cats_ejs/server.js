
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
app.get("/cars", function(request, response){
  response.render('cars');
})
app.get("/form", function(request, response){
  response.render('form');
})

