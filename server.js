const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const suppliersRoutes = require('./routes/suppliersRoutes'); // Import des routes

const app = express();
const port = 3000;

app.use(cors()); // Gère les requêtes cross-origin
app.use(bodyParser.json()); // Parse le JSON envoyé dans le corps des requêtes

app.use('/suppliers', suppliersRoutes); // Montre les routes sous /suppliers

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
