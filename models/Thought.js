const {Schema, model} = require("mongoose");
const reactionSchema = require('./Reaction.js')


const thoughtSchema = new Schema(
    {
        text: {
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

thoughtSchema.virtual("reactCount").get(function () {
    return this.reaction.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
