const mongoose = require('mongoose');

const url = "mongodb+srv://singhshreyash466:Shreyash%40790501@cluster0.cd9nwhd.mongodb.net/issue_Tracker";

const connectUsingMongoose = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err; // Optionally re-throw the error to handle it elsewhere
    }
};

module.exports = connectUsingMongoose; // Corrected export statement
