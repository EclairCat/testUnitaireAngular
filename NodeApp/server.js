var http = require('http');
var express = require('express');
var cors =require('cors');

var app = express();

var myRouter = express.Router();

myRouter.route('/')

.get(function(req,res){
    console.log("yay");
    res.status(200);
    res.json({nom: "yolo", prenom : "toto", taille : "100", age : "25" })
});
app.use(cors());
app.use(myRouter);


app.listen(8080, function(){
  console.log("Listening sur le port 8080");
});