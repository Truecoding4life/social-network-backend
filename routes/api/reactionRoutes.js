const router = require('express').Router();
const Thought = require('../../models/Thought');

// Create a reaction
router.post("/:thoughtId", async (req, res) => {
  try {
    const reactionCreation = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reaction: req.body } },
      { new: true }
    );
    res.status(200).json(reactionCreation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;