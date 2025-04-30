const mongoose = require('mongoose');
async function dbConn() {
    const conn=await mongoose.connect('mongodb+srv://Sarvesh:root@cluster0.xpyp6db.mongodb.net/crud-ce?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log('db connect successfully')
    }
    else{
        console.log('db connection failed');
    }
}
module.exports=dbConn;