const db = require("../config/db");

// librairie pour hacher le mdp
const bcrypt = require('bcrypt');

const UsersModel = {
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
    },

    getUserById: (id, callback) => {
        const query = 'SELECT * FROM users WHERE Id_users = ?';
        // Passer le tableau id directement en parametre
        db.query(query, [id], (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        })
    },

    // Fonction prenant 2 parametres (data) objet contenant les informations de l'utilisaeur à insérer. (callback) la fonction de rappel qui gére le résultat et les erreurs

    createUser: (data, callback) => {
        // Fonction bcrypt pour hacher et salé le mdp
        const saltRounds = 10;
        bcrypt.hash(data.password, saltRounds, (error, hashedPassword) => {
            if (error) {
                callback(error, null);
            } else {
                const query = 'INSERT INTO users (mail, phone_number, address, username, password, first_name, birthday, gender, last_name, isAdmin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
                // Tableau contenant les valeurs de chaque champs de l'objet data
                // Bien respecter l'ordere d'insertion
                // Les valeurs vont remplacer les ?
                const values = [
                    data.mail,
                    data.phone_number,
                    data.address,
                    data.username,
                    data.password,
                    data.first_name,
                    data.birthday,
                    data.gender,
                    data.last_name,
                    data.isAdmin
                ];
        // db.query execute la requete SQL avec le tableau values
        // 3eme argument = fonction de rappel
        db.query(query, values, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    },

    loginUser: (data, callback) => {
            const query = 'SELECT * FROM users WHERE username = ?';
            const values = [data.username];

            // On récup l'utilisateur qui repond à la requete
            db.query(query, values, (error, result) => {
                if (error) {
                    callback(error, null);
                } else if (result.length === 0){
                    // Aucun utilisateur trouvé
                    callback(null, null);
                } else {
                    // Utilisateur trouvé
                    callback(null, result[0]);
                }
            });
        },

    deleteUser: (id, callback) => {
        const query = 'DELETE FROM users WHERE Id_users = ?';
        db.query(query, [id], (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        })
    },

    updateUser: (id, data, callback) => {
        const query = 'UPDATE users SET mail = ?, phone_number = ?, address = ?, username = ?, password = ?, first_name = ?, birthday = ?, gender = ?, last_name = ?, isAdmin = ? WHERE Id_users = ?';
        const values = [
            data.mail,
            data.phone_number,
            data.address,
            data.username,
            data.password,
            data.first_name,
            data.birthday,
            data.gender,
            data.last_name,
            data.isAdmin,
            // permet de passer le parametre de WHERE Id_users = ?'
            id
        ]
        db.query(query, values, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        })
    }


};

module.exports = UsersModel;