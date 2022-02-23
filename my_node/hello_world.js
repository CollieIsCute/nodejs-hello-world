const { MongoClient } = require('mongodb')

// Connect to the db
MongoClient.connect("mongodb://my_db:27017/", function (err, db) {
   
     if (err) throw err;
     while(true)
          console.log("Success connections!\n");
     //Write databse Insert/Update/Query code here..
                
});

console.log("Finish connections!\n");
