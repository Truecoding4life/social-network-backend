const router = require('express').Router();
const User = require('../../models/User');


// get all users TESTED
router.get('/', async (req, res) => {
    try {
        const userData = await User.find()
        .populate({ path: 'thoughts', select: '-__v' });
        res.status(200).json(userData);
    } catch(err) {
        res.status(500).json(err);
    }
});

// get one user by id TESTED
router.get('/:id', async (req, res) => {
    try {
        const getOneUser = await User.findOne({ _id: req.params.id }).populate({ path: 'thoughts', select: '-__v' });;
        res.status(200).json(getOneUser);
        if(!getOneUser) {
            return res.status(404).json({ message: 'No User with this id!' });
        }
    } catch(err) {
        res.status(500).json(err);
    }
});


// create new user TESTED
router.post('/', async (req, res) => {
    try {
        const userCreation = await User.create(req.body);
        res.status(200).json(userCreation);
    } catch(err) {
        res.status(400).json(err);
    }
});

// update user by id TESTED
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


// delete user by id
router.delete('/:id', async (req, res) => {
    try {
        const userDeletion = await User.findOneAndDelete({ _id: req.params.id });
        if (!userDeletion) {
            return res.status(404).json({ message: 'No User with this id!' });
        }
        res.status(200).json("User has been deleted!");
    } catch(err) {
        res.status(500).json(err);
    }
});

// add friend 
router.post('/:userId/friends/:friendId', async (req, res) => {
    try {
        const addFriend = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.friendId } },
            { runValidators: true, new: true }
          );
        const addFriend2 = await User.findOneAndUpdate(
            { _id: req.params.friendId },
            { $push: { friends: req.params.userId } },
            { runValidators: true, new: true }
          );
          if (!addFriend) {
            return res.status(404).json({ message: 'No User with this id!' });
          }
    
          res.json(addFriend2);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;