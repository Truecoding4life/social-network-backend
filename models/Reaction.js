// Import mongoose 
const { Schema} = require('mongoose');

const reactionSchema = Schema( {
    id:{
        type: Number,
        Required: true
    },
    body:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = reactionSchema;