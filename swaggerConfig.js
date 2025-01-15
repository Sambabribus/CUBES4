// Swagger utilise un format appelé OpenAPI, ici on va  utiliser les bibliothèques  swagger-jsdoc et swagger-ui-express.

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentation de l\'API Node.js',
      contact: {
        name: 'JeunePapaDynamique',
        email: 'JeunePapaDynamique@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Serveur de Negosud',
      },
    ],
    tags: [
          { name: 'Items', description: 'Gestion des items' },
          { name: 'Orders', description: 'Gestion des commandes' },
          { name: 'Order Suppliers', description: 'Commandes fournisseurs' },
          { name: 'Order Supplier Details', description: 'Détails des commandes fournisseurs' },
          { name: 'Order User Details', description: 'Détails des commandes utilisateurs' },
          { name: 'Suppliers', description: 'Gestion des fournisseurs' },
          { name: 'Users', description: 'Gestion des utilisateurs' },
        ],
  },
  apis: ['./routes/*.js'], // Indique où Swagger doit chercher les commentaires pour la documentation
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
