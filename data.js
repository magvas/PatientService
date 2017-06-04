var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : '192.168.73.252',
  user     : 'root',
  password : '3X12=36',
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
