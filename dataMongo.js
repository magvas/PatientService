var mongoClient      = require('mongodb').MongoClient;
var dburl = 'mongodb://homeserver:27017/laboratory';

 function getAllPatients(callback){
    mongoClient.connect(dburl,function (err,db) {
        if (err) {
            return console.dir(err)
        } else {
            var patients = db.collection('patients');
     
            patients.find({}).toArray(function (err, result) {
                if (err) {
                    console.log('Error while performing Query.');
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
    callback();   
}

function savePatient(patient,callback) {    
                    callback("Patient created successful");    
}

// function savePatient(patient,callback) {

//     var sql = "SELECT * from PATIENTS as p where p.LASTNAME = '" + patient.lastname + "' and  p.FIRSTNAME = '" + patient.firstname + "'";

//     connection.query(sql,
//             function(err,rows,fields){
//                 if (!err && rows.length === 1) {
//                     connection.query("update PATIENTS set LASTNAME = '" + rows[0].LASTNAME + "', FIRSTNAME = '" + rows[0].FIRSTNAME + "', GENDER = '" + patient.gender + "' where PATID = " + rows[0].PATID,
//                     function(err,result){
//                         if (!err && result.changedRows > 0) {
//                             callback("Patient updated successful!");
//                         } else if (!err && result.changedRows === 0){
//                             callback("Nothing to do!");
//                         }
//                         else{
//                             callback('Something strange happened! :-[');
//                         }
//                     });
                    
//                 }
//                 else if (!err && rows.length === 0) {
//                     connection.query("insert into PATIENTS values ( null, '" + patient.lastname + "', '" + patient.firstname + "','" + patient.gender + "')");
//                     callback("Patient created successful");
//                 }
//                 else {
//                     callback('Something strange happened! :-[');
//                 }
                
//             });

    
// }

// function getAllOrders(callback){
//     connection.query('SELECT * from ORDERS', function(err, rows, fields) {   
//           if (!err){
//             callback(rows);
//             }
//           else{
//             console.log('Error while performing Query.');
//             }        
//     });   
// }


module.exports.getAllPatients = getAllPatients;
// module.exports.getAllOrders = getAllOrders;
// module.exports.savePatient = savePatient;
