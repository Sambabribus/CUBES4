// Importation de la librairie express
// Express permet de gerer les routes de l'API
const express = require('express');
const mysql = require('mysql2');
const swaggerUi = require('swagger-ui-express'); // Import Swagger UI
const swaggerDocs = require('./swaggerConfig'); // Chemin vers la configuration Swagger
const cors = require('cors');
const bodyParser = require('body-parser');

// Instantation d'un objet Express qui va contenir le serveur
const app = express();

// port d'écoute
const port = 3000;

const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['http://localhost:8081'];

// Middleware pour CORS
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('CORS non autorisé pour cette origine'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Méthodes HTTP autorisées
    credentials: true
}));


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

// Intégration de la documentation Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
    console.log(`Swagger documentation available at http://localhost:${port}/api-docs`);
})
