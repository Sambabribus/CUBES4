// Importation de la librairie
const mysql = require('mysql2');
// Instantation de l'objet
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cube4group'
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
