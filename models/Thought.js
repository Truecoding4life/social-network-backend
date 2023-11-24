const {Schema, model} = require("mongoose");


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
},
{
    toJSON: {
      getters: true,
    },
    id: false,
})





const thoughtSchema = new Schema(
    {
        thoughText: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        reaction: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reaction.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
