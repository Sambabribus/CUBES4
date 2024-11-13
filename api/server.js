const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const suppliersRoutes = require('./suppliers');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/suppliers', suppliersRoutes);

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
