const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Création de l'application Express
const app = express();

// Middleware
app.use(cors()); // Permet les requêtes Cross-Origin
app.use(bodyParser.json()); // Parse les requêtes au format JSON
app.use(bodyParser.urlencoded({ extended: true })); // Parse les requêtes URL-encoded

// Routes API
const userRouter = require('./routes/usersRoutes');
const suppliersRouter = require('./routes/suppliersRoutes');
const ordersRouter = require('./routes/ordersRoutes');
const itemsRouter = require('./routes/itemsRoutes');

// Utilisation des routes
app.use('/api/users', userRouter);
app.use('/api/suppliers', suppliersRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/items', itemsRouter);

// Vérifie si le frontend est disponible et le sert
const frontendPath = path.join(__dirname, 'frontend', 'dist');
app.use(express.static(frontendPath));

// Redirige toutes les autres routes vers l'index.html (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// Configuration du port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur backend en cours d'exécution sur http://localhost:${PORT}`);
});
