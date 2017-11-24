var express = require("express");
var router = express();
var app = require("./app");
var http = require("http");
var model = require("./model");
const log = require("./log");

router.use(log({"level":"info"}));

router.all("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get("/patients",function(req,res){
    app.getPatients(function(result){        
        res.send(result);
    });
});

router.get("/orders",function(req,res){
    app.getOrders(function(result){
        res.send(result);
    });
});

router.get("/savepatient",function(req,res){
    var patient = new model.Patient(null,req.query.firstname,req.query.lastname,req.query.gender);       
    app.savePatient(patient,function(result){
        res.send(result);
    });    
});

var httpServer = http.createServer(router);

httpServer.listen(3000,function(){
    console.log("Service listening on port 3000!");   
});

