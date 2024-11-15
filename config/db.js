const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

//Verifier la connexion
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion ? MySQL :', err.message);
        return;
    }
    console.log('Connect? ? la base de donn?e MySQL');
});
module.exports = db;