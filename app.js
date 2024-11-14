const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const ordersRoutes = require('./routes/ordersRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/orders', ordersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
