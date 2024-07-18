const express = require('express');
const mongooseConnection = require('./config/mongoose'); // Correct path to mongoose.js file
const port = 8000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

app.use(express.static('./assets'));
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true })); // Corrected usage of express.urlencoded()
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routes'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// parse application/json
app.use(bodyParser.json());

app.listen(port, async (err) => {
    if (err) {
        console.error("Error in running the server", err);
        return;
    }
    console.log("Express server up and running on port:", port);
    
    try {
        await mongooseConnection(); // Call the function to connect to MongoDB
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        return;
    }
    
    console.log("MongoDB connected successfully");
});
