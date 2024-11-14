const db = require("../config/database");

const Users = {
    // callback est une fonction passée en argument quand on appelle la fonction getAllUsers
    // Cela pécifie ce qui doit se passer aprés la récuperation des données dans la bdd
    getAllUsers: (callback) => {
        const query = 'SELECT * FROM users';
        // Executer de la requete et de la fonction de rappel qui prend en parametre err et res
        db.query(query, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }
};

module.exports = Users;