const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true, // Transpile les dépendances si nécessaire
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000', // L'URL de votre backend
                changeOrigin: true, // Évite les problèmes de CORS en modifiant l'origine
            //    pathRewrite: { '^/api': '' }, // Supprime /api si ce n'est pas nécessaire côté backend
            },
        },
    },
});
