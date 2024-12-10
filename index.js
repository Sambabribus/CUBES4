// Importation de la librairie express
// Express permet de gerer les routes de l'API
const express = require('express');
const mysql = require('mysql2');
// Instantation d'un objet Express qui va contenir le serveur
const app = express();
// port d'écoute
const port = 3000;
// Importation des routes utilisateurs
const userRouter = require('./routes/usersRoutes');
const suppliersRouter = require('./routes/suppliersRoutes');
const ordersRouter = require('./routes/ordersRoutes');
const itemsRouter = require('./routes/itemsRoutes');

const ordersSuppliersRouter = require('./routes/ordersSuppliersRoutes');
const ordersSuppliersDetailsRouter = require('./routes/ordersSuppliersDetailsRoutes');
const ordersUsersDetailsRouter = require('./routes/ordersUsersDetailsRoutes');

// Permet à Express de traiter les données JSON dans le corps des requetes HTTP
app.use(express.json());
// Indique à Express d'utiliser les routes définies dans le ficher usersRoutes.js commençant par le chemin api/users
app.use('/api/users', userRouter);
app.use('/api/suppliers', suppliersRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/items', itemsRouter);

app.use('/api/orders-suppliers', ordersSuppliersRouter);
app.use('/api/orders-suppliers-details', ordersSuppliersDetailsRouter);
app.use('/api/orders-users-details', ordersUsersDetailsRouter);

// Démarage du serveur + affichage message de connexion ok
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
