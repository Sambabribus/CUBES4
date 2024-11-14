const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const suppliersRoutes = require('./routes/suppliersRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/suppliers', suppliersRoutes);

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
