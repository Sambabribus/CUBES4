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