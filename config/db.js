// Importation de la librairie
const mysql = require('mysql2');
// Charge les variables d'environnement
require('dotenv').config();
// Instantation de l'objet
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        return console.error('Erreur de connexion : ' + err.message);
    }
    console.log('Connecté à la base de données MySQL.');
});

// Permet de rendre accessible la constante connection dans l'ensemble du code 
// Ressemble auxvaraibles globale en php mais ici il faudra importer le module pour l'utiliser (plus sécurisé)
module.exports = db;
