import { MongoClient } from 'mongodb';

// Connect to the db
MongoClient.connect("mongodb://localhost:27/MyDb", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..
                
});

console.log("Finish connections!\n");