const router = require('express').Router();
const Thought = require('../../models/Thought');
const User = require('../../models/User');

// Create thought
router.post('/', async (req, res) => {
    try {
        const thoughtCreation = await Thought.create(req.body);
        const updateUserInfo = await User.findOneAndUpdate(
            { "username": req.body.username },
            { $addToSet: { thoughts: thoughtCreation._id } },
            { new: true }
          );
        res.status(200).json(thoughtCreation);
    } catch(err) {
        res.status(500).json(err);
    }
});
// Get all thought



module.exports = router;