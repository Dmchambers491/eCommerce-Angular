var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const multer = require('multer');
http = require('http');
path = require('path');

const app = express()
    .use(cors())
    .use(bodyParser.json())

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@123',
    database: 'eCommerce'
});

conn.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("Connected to database successfully!!");
});

app.get('/api/users', (req, res) => {
    let sql = "SELECT * FROM user";
    let query = conn.query(sql, (err, results) => {
        if(err){
            throw err;
        }
        res.send(JSON.stringify({"status":200, "error":null, "response":results}));
    });
});


app.listen(3000, () => {
    console.log("Server started on port 3000")
});