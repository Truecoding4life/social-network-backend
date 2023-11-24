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

// update user by id
router.put('/:id', async (req, res) => {
    try{
        const users = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: {username: req.body.username, password: req.body.password} },
            { runValidators: true, new: true }
          );
          if (!users) {
            return res.status(404).json({ message: 'No User with this id!' });
          }
    
          res.json(users);
    } catch(err) {
        res.status(500).json(err);
    }
});

;
module.exports = router;