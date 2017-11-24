var data = require("./dataMongo.js");


function getPatient(){
    return "Patient";
}

function getPatients(callback){
    data.getAllPatients(function(res){
        callback(res);
    });    
}

function savePatient(patient,callback){
    patient.generatePatId();
    data.savePatient(patient,function(res){
        callback(res);
    });
}

function getOrders(callback){
    data.getAllOrders(function(res){
        callback(res);
    });    
}

module.exports.getPatient = getPatient;
module.exports.getPatients = getPatients;
module.exports.getOrders = getOrders;
module.exports.savePatient = savePatient;