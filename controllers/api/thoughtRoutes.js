const router = require('express').Router;
const Thought = require('../../models/Thought')

router.get('/thoughts', async (req,res)=> {
    try{
        const thoughtsData = await Thought
    } catch(err) {res.status(500).json('Fail to find Thought !!!    ' + req )}
})