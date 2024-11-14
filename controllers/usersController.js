const User = require('../models/Users');

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

module.exports = {
    getAllUsers
};