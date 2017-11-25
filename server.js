const express = require("express");
const app = express();
const application = require("./app");
const http = require("http");
const path = require("path");
const model = require("./client/model");
const log = require("./log");
const nocache = require("nocache");
const cors = require("cors");
const session = require("express-session");

/// Use this line if clients sends JSON data and not an URL string for data
// const bodyParser = require("body-parser");

const clientFolder = "client";

var clientPath = path.join(__dirname, clientFolder);


/// Use this line if clients sends JSON data and not an URL string for data
// app.use(bodyParser.json());
app.use(cors());

app.use(nocache());

app.use(session({
    secret: "secret",
    cookie: {maxAge: 24 * 60 * 60 * 1000}
}));

app.use("/",express.static(clientPath));

app.use((req,res,next) => {
    req.session.user = "tom.ate";
    next();
});

app.use(log({"level":"info"}));

app.get("/patients",function(req,res){
    application.getPatients(function(result){        
        res.send(result);
    });
});

app.get("/orders",function(req,res){
    application.getOrders(function(result){
        res.send(result);
    });
});

app.get("/savepatient",function(req,res){
    /// Use this line if clients sends JSON data and not an URL string for data
    // var patient = new model.Patient(null,req.body.firstname,req.body.lastname,req.body.gender);
    var patient = new model.Patient(null,req.query.firstname,req.query.lastname,req.query.gender);       
    application.savePatient(patient,function(result){
        res.send(result);
    });    
});

var httpServer = http.createServer(app);

httpServer.listen(3000,function(){
    console.log("Service listening on port 3000!");   
});

