const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors')
const {getAllModels, addModel, getModel, deleteModel, updateModel, getFirstModel} = require("./routes/model");
const app = express();
app.use(cors())
const port = 4000;

// Notes

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'Root@123',
    database: 'fabric'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(bodyParser.json({ limit: '100mb' })); // parse form data client

app.get('/view/first', getFirstModel);

app.get('/all', getAllModels);
app.post('/create', addModel);
app.post('/update/:id', updateModel);

app.get('/view/:id', getModel);
app.get('/delete/:id', deleteModel);

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
