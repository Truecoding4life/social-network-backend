const {Schema, model} = require("mongoose");


const reactionSchema = Schema( {
    id:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
    body:{
        type: String,
        required: true
    },
    username: {
        type: String
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
                ref: "user",
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

const Thought = model("thoughts", thoughtSchema);

module.exports = Thought;
