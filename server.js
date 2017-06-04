var express = require('express');
var app = express();
var application = require('./app.js');

app.get('/patients',function(req,res){
    application.getPatients(function(result){
        res.send(result);
    });
});

app.get('/orders',function(req,res){
    application.getPatients(function(result){
        res.send(result);
    });
});

app.listen(3000,function(){
    console.log('Service listening on port 3000!');
});