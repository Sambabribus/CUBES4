const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true, // Assure que les dépendances sont transpilées avec Babel
});
