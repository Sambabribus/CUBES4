const User = require('../models/usersModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUsers = (req, res) => {
    // Appel de la fonction dans Users
    User.getAllUsers((error, result) => {
        if (error) {
            res.status(500).json(error.message);
        } else {
            res.json(result);
        }
    });
};

const getUserById = (req, res) => {
    User.getUserById(req.params.id, (error, result) => {
        if (error) {
            res.status(500).json(error.message);
        } else {
            res.json(result);
        }
    });
};

const createUser = (req, res) => {
    User.createUser(req.body, (error, result) => {
        if (error) {
            res.status(500).json(error.message);
        } else {
            res.json(result);
        }
    });
};

const loginUser = async (req, res) => {
    // Clé sécurisée
    // Génération et de validation du token. On s'assure qu'elle ne change pas aprés la création du token
    const SECRET_KEY = "toto";
    try {
        const { username, password } = req.body;
        // Si username ou password absent de la requete
        if (!username || !password) {
            return res.status(400).json({ message: 'Veuillez fournir un nom d\'utilisateur et un mot de passe.' });
        }

        // Appel au modèle
        // username est entre crochet pour pouvoir passer en parametre l'objet
        User.loginUser({username}, async (error, user) => {
            if (error) {
                return res.status(500).json({ message: 'Erreur serveur.', error });
            }

            if (!user) {
                return res.status(401).json({ message: 'Utilisateur non trouvé.' });
            }

            // Vérification du mot de passe
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                return res.status(401).json({ message: 'Mot de passe incorrect.' });
            }

            // On va pouvoir récuperer les informations dans différentes parties de notre code (site web)
            // Génération du token JWT
            const token = jwt.sign(
                {
                    id: user.id,
                    username: user.username,
                    mail: user.mail,
                    isAdmin: user.isAdmin
                },
                SECRET_KEY,
                { expiresIn: '1h' }
            );

            return res.status(200).json({
                success: true,
                message: "Connexion réussie.",
                token
            });
        });
    } catch (error) {
        return res.status(500).json({ message: 'Erreur interne du serveur.', error });
    }
};


const deleteUser = (req, res) => {
    User.deleteUser(req.params.id, (error, result) => {
        if (error) {
            res.status(500).json(error.message);
        } else {
            res.json(result);
        }
    })
}

const updateUser = (req, res) => {
    User.updateUser(req.params.id, req.body, (error, result) => {
        if (error) {
            res.status(500).json(error.message);
        } else {
            res.json(result);
        }
    })
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser
};