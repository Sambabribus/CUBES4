// Importation de la librairie express
// Express permet de gerer les routes de l'API
const express = require('express');
const mysql = require('mysql2');
// Instantation d'un objet Express qui va contenir le serveur
const app = express();
// port d'écoute
const port = 3000;
// Importation des routes utilisateurs
const userRouter = require('./routes/userRoutes');

// Permet à Express de traiter les données JSON dans le corps des requetes HTTP
app.use(express.json());
// Indique à Express d'utiliser les routes définies dans le ficher userRoutes.js commençant par le chemin api/users
app.use('/api/users', userRouter);

// Démarage du serveur + affichage message de connexion ok
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
