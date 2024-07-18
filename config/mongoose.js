const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://singhshreyash466:Shreyash@790501@cluster0.cd9nwhd.mongodb.net/issue_Tracker');

const db = mongoose.connect;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database Successfully :: MongoDB');
});


module.exports = db;