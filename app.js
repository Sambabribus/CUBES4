const express = require('express');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());



//Routes
app.use('/api/items', itemRoutes);

//Demarrage du serveur
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});