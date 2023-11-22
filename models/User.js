const mongoose = require("mongoose");

// Create an user schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // Ensure the field is unique
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9_]+$/.test(value);
        },
        message: "Username must only contain letters, numbers, or underscores",
      },
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // Use a regular expression for email validation
          return /\S+@\S+\.\S+/.test(value);
        },
        message: "Invalid email address",
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    friends: [
        {
            type: Schema.Type.ObjectId,
            ref: "User",
        }
    ]
  },
  {
    toJSON: {
        virtuals: true,
    },
    id: false,
  }
);

// Create virtuals
userSchema
  .virtual('friendCount')
  .get(function(){
    return this.friends.length
  })

// Create Model User
const User = mongoose.model("User", userSchema);

// Export User Model

module.exports = User;