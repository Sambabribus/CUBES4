const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true, // Assure que les d�pendances sont transpil�es avec Babel
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000', // L'URL de ton backend
                changeOrigin: true, // Permet de modifier l'origine pour �viter les erreurs CORS
            },
        },
    },
});
