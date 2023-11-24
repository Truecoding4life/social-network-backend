const router = require('express').Router();
const Thought = require('../../models/Thought');
const User = require('../../models/User');

// Create thought
router.post('/', async (req, res) => {
    try {
        const thoughtCreation = await Thought.create(req.body);
        const updateUserInfo = await User.findOneAndUpdate(
            { "_id": req.body.userId },
            { $addToSet: { thoughts: thoughtCreation._id } },
            { new: true }
          );
        res.status(200).json(thoughtCreation);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Get all thought
router.get('/', async (req, res) => {
    try {
        const thoughtData = await Thought.find({});
        res.status(200).json(thoughtData);
    } catch(err) {
        res.status(500).json(err);
    }
});

// update a thought by id
router.put('/:id', async (req, res) => {
    try {
        const thoughtUpdate = await Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $set: {thoughText: req.body.thoughText} },
            { runValidators: true, new: true }
          );
          if (!thoughtUpdate) {
            return res.status(404).json({ message: 'No Thought with this id!' });
          }
    
          res.json(thoughtUpdate);
        
        res.status(200).json(thoughtUpdate);
    } catch(err) {
        res.status(500).json(err);
    }
});


// delete a thought by id

router.delete('/:id', async (req, res) => {
    try {
        const thoughtDeletion = await Thought.findOneAndDelete({ _id: req.params.id });
        const userDeleteKey = await User.findOneAndUpdate(
            { "_id": req.body.userId },
            { $pull: { thoughts: req.params.id } },
            { new: true}
        );
        if (!thoughtDeletion) {
            return res.status(404).json({ message: 'No Thought with this id!' });
          }
    
          res.json(thoughtDeletion);
    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;