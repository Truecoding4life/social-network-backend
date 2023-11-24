const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities')
  ? cwd.split('01-Activities')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});





// const { Schema, model } = require('mongoose');
// const Tag = require('./Tag');

// // Schema to create Post model
// const applicationSchema = new Schema(
//   {
//     published: {
//       type: Boolean,
//       default: false,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//     buildSuccess: {
//       type: Boolean,
//       default: true,
//     },
//     description: {
//       type: String,
//       minLength: 15,
//       maxLength: 500,
//     },
//     tags: [Tag],
//   },
//   {
//     toJSON: {
//       virtuals: true,
//     },
//     id: false,
//   }
// );

// // Create a virtual property `getTags` that gets the amount of tags associated with an application
// applicationSchema
//   .virtual('getTags')
//   // Getter
//   .get(function () {
//     return this.tags.length;
//   });

// // Initialize our Application model
// const Application = model('application', applicationSchema);

// module.exports = Application;

