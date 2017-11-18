var express = require('express');
var app = express();
var application = require('./app.js');
var model = require('./model.js');

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/patients',function(req,res){
    application.getPatients(function(result){        
        res.send(result);
    });
});

app.get('/orders',function(req,res){
    application.getOrders(function(result){
        res.send(result);
    });
});

app.get('/savepatient',function(req,res){
        var patient = {lastname: req.query.lastname,firstname: req.query.firstname,gender: req.query.gender};       
    application.savePatient(patient,function(result){
        res.send(result);
    });    
});

app.listen(3000,function(){
    console.log('Service listening on port 3000!');
});