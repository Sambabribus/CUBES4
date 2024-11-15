const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});