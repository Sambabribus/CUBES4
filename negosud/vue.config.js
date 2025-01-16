const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true, // Transpile les d�pendances si n�cessaire
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000', // L'URL de votre backend
                changeOrigin: true, // �vite les probl�mes de CORS en modifiant l'origine
            //    pathRewrite: { '^/api': '' }, // Supprime /api si ce n'est pas n�cessaire c�t� backend
            },
        },
    },
});
