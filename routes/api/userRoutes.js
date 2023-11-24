const router = require('express').Router();
const User = require('../../models/User');


// get all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.find({});
        res.status(200).json(userData);
    } catch(err) {
        res.status(500).json(err);
    }
});

// get one user by id
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findOne({ _id: req.params.id });
        res.status(200).json(userData);
    } catch(err) {
        res.status(500).json(err);
    }
});