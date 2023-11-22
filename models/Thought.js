const mongoose = require('mongoose')
const { schema } = require('..')

const thoughtSchema = new mongoose.Schema ({
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username:[{
        type: Schema.Type.ObjectId,
        ref: 'User'
    }],
    reaction:[{
        type: Schema.Type.ObjectId,
        ref: 'Reaction'
    }],
},
{
    toJSON:{
        virtuals: true
    },
    id: false
});