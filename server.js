const express = require('express');
const app = express();
 
let db ;
const {MongoClient} = require('mongodb');
const connectionString = 'your mongoDB link'
 
app.use(express.json());
app.get('/' ,(request,response)=>{
    console.log('welcome to m server');
    
});
 
 

MongoClient.connect(connectionString,{ useUnifiedTopology: true } , (err , client)=>{
    if(err) throw err;
    db = client.db('myDb')
    console.log('MongoDb cloud is connected!!!');  
    });

app.listen(5000, ()=>{
    console.log(`Server started on port 5000`);
})








 
