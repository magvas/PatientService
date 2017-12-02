var mongoClient      = require("mongodb").MongoClient;
var dburl = "mongodb://homeserver:27017/laboratory";

function getAllPatients(callback){
    mongoClient.connect(dburl,function (err,db) {
        if (err) {
            return console.dir(err)
        } else {
            var patients = db.collection("patients");
     
            patients.find({}).toArray(function (err, result) {
                if (err) {
                    console.log("Error while performing Query.");
                }
                else{
                    callback(result);
                    db.close();
                }
            })
        } 
    });    
}


function getAllOrders(callback){
    callback("Not implemented yet!");   
}

function savePatient(patient,callback) {
    mongoClient.connect(dburl,function(err,db){
        if (err) {
            callback(err);
        } else {
            var patients = db.collection("patients");
            patients.insert(patient, {w:1}, function(err, result) {
                if (err) {
                    callback(err);
                } else {
                    callback(`Patient with ID ${result.ops[0].patid} created successful`);                    
                }
            });  
        }
    });                 
}

module.exports.getAllPatients = getAllPatients;
module.exports.getAllOrders = getAllOrders;
module.exports.savePatient = savePatient;
