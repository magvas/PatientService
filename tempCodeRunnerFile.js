var mongoClient      = require('mongodb').MongoClient;

mongoClient.connect('mongodb://homeserver:27017/laboratoy',function (err,db) {
   if (err) {
       return console.dir(err)
   } else {
       var collection = db.collection('patients');
   } 
});