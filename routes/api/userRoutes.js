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


// create new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch(err) {
        res.status(400).json(err);
    }
});


module.exports = router;