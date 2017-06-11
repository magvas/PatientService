var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : '192.168.73.252',
  user     : 'linfos',
  password : 'linfos',
  database : 'LINFOS'
});

function getAllPatients(callback){
    connection.query('SELECT * from PATIENTS', function(err, rows, fields) {   
          if (!err){
            callback(rows);
            }
          else{
            console.log('Error while performing Query.');
            }        
    });   
}

function savePatient(patient,callback) {

    var sql = "SELECT * from PATIENTS as p where p.LASTNAME = '" + patient.lastname + "' and  p.FIRSTNAME = '" + patient.firstname + "'";

    connection.query(sql,
            function(err,rows,fields){
                if (!err && rows.length === 1) {
                    connection.query("update PATIENTS set LASTNAME = '" + rows[0].LASTNAME + "', FIRSTNAME = '" + rows[0].FIRSTNAME + "', GENDER = '" + patient.gender + "' where PATID = " + rows[0].PATID,
                    function(err,result){
                        if (!err && result.changedRows > 0) {
                            callback("Patient updated successful!");
                        } else if (!err && result.changedRows === 0){
                            callback("Nothing to do!");
                        }
                        else{
                            callback('Something strange happened! :-[');
                        }
                    });
                    
                }
                else if (!err && rows.length === 0) {
                    connection.query("insert into PATIENTS values ( null, '" + patient.lastname + "', '" + patient.firstname + "','" + patient.gender + "')");
                    callback("Patient created successful");
                }
                else {
                    callback('Something strange happened! :-[');
                }
                
            });

    
}

function getAllOrders(callback){
    connection.query('SELECT * from ORDERS', function(err, rows, fields) {   
          if (!err){
            callback(rows);
            }
          else{
            console.log('Error while performing Query.');
            }        
    });   
}


module.exports.getAllPatients = getAllPatients;
module.exports.getAllOrders = getAllOrders;
module.exports.savePatient = savePatient;
