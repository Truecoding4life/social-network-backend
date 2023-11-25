[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)

# Social Network Backend

### Resources

[GitHub Repository](https://github.com/Truecoding4life/Developer-blog-with-model-view-control)

[Demonstration video](https://developer-blogpost-a4d9376f41de.herokuapp.com/dashboard)

[Jay's Studio](https://truecoding4life.github.io/Jaystudio/)

---

#### Table of Contents

- [Resources](#resources)
- [Description](#description)
- [Development](#development)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

---

## Description
While traditional databases like MySQL provide a structured approach to data storage, MongoDB offers a more flexible and easy-to-work-with NoSQL database structure. Join me on a journey to explore how I've optimized this NoSQL database to power the backend of our application. Discover the advantages of a less rigid data model and the streamlined development experience MongoDB brings to the table.


## Development

### NoSQL Database Structure

NoSQL Database like MongooseDB offer a less rigid and easy to work with data model using nested object

```
const thoughtSchema = new Schema(
  {
    thoughText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    username: [{ type: Schema.Types.ObjectId, ref: "user",},],
    reaction: [reactionSchema],},
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
```

---

### Using Regex to Validate Email

Over the course of this homework assignment, I take advantage of the use for Regex to validate username and email. [check out my tutorial about this](https://gist.github.com/Truecoding4life/613f04cc85d5c1c9cea3ec32ba87d318)

```
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {

          return /\S+@\S+\.\S+/.test(value);

        },
        message: "Invalid email address",
      },
    },

```

---

### Code highlight
Because MongoDB use object to structural database, when we need to delete a sub-document we must access it from it parent object, here you can see I'm trying to delete Reaction that nested in Thought, in order to remove reaction I use the **$pull** operation from MongoDB to extract Reaction out from Thought.

```
router.delete("/:thoughtId/reactions/:reactionId", async (req, res) => {
  try {
    const thoughtDeleteReaction = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reaction: { _id: req.params.reactionId } } },
      { runValidators: true, new: true }
    );
    if (!thoughtDeleteReaction) {
      return res
        .status(404)
        .json({ message: "No reaction found with this id!" });
    }
    res.status(200).json(thoughtDeleteReaction);
  } catch (err) {
    res.status(500).json(err);
  }
});
```




## Technologies Used

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

---

### Installation Guide

**Clone the Repository:**
```
git clone https://github.com/your-username/your-application.git
cd your-application

```
**Install Dependencies:**

```
npm install

```

**Run the Application:**

```
npm start
This will start your application. By default, it might run on http://localhost:3001.

```

**Testing API Routes:**

I recommend using Insomnia for testing API routes.
Import your API specifications into Insomnia and start testing.
Insomnia provide clear API documentation so users understand the available routes and functionalities. 


Document doesn't require any authentication or additional configuration.
Enjoy Exploring!


---

#### This README was generated based on the Good README Guide

This Website is made available by © Jay's Studio 2023
