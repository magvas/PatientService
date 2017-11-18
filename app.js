var express = require('express');
var app = express();
var data = require('./dataMongo.js');


function serviceTest(){
    return "Service Response";
}

function getPatient(){
    return "Patient";
}

function getPatients(callback){
    data.getAllPatients(function(res){
        callback(res);
    });    
}

function savePatient(patient,callback){
    data.savePatient(patient,function(res){
        callback(res);
    });
}

function getOrders(callback){
    data.getAllOrders(function(res){
        callback(res);
    });    
}

function save(patient){
    return "Patient saved successful";
}

function remove(patient){
    return "Patient removed successful";
}

function update(patient){
    return "Patient updated successful";
}

// console.log(getPatients());

// getPatients(function(res){
            
//             for(var i = 0; i < res.length; i++){
//                 //var oldContent = document.getElementById("output").innerHTML;
//                 //document.getElementById("output").innerHTML = oldContent + res[i].lastName + ", " + res[i].firstName + "<br>";
//                 console.log(res[i].lastName + ", " + res[i].firstName);
//             }    
//             });

module.exports.getPatient = getPatient;
module.exports.getPatients = getPatients;
module.exports.getOrders = getOrders;
module.exports.remove = remove;
module.exports.savePatient = savePatient;