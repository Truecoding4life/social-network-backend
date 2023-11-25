const connection = require('../config/connection');
const { User, Thought } = require('../models');
connection.on('error', (err) => err);

const userData = [
    {
      "username": "JohnDoe",
      "email": "john.doe@gmail.com",
      "password": "123456789"
    },
    {
      "username": "AliceSmith",
      "email": "alice.smith@gmail.com",
      "password": "123456789"
    },
    {
      "username": "BobJohnson",
      "email": "bob.johnson@gmail.com",
      "password": "123456789"
    },
    {
      "username": "EmilyJones",
      "email": "emily.jones@gmail.com",
      "password": "123456789"
    },
    {
      "username": "CharlieBrown",
      "email": "charlie.brown@gmail.com",
      "password": "123456789"
    },
    {
      "username": "GraceWilliams",
      "email": "grace.williams@gmail.com",
      "password": "123456789"
    },
    {
      "username": "DanielDavis",
      "email": "daniel.davis@gmail.com",
      "password": "123456789"
    },
    {
      "username": "OliviaMiller",
      "email": "olivia.miller@gmail.com",
      "password": "123456789"
    },
    {
      "username": "HenryWilson",
      "email": "henry.wilson@gmail.com",
      "password": "123456789"
    },
    {
      "username": "EllaBrown",
      "email": "ella.brown@gmail.com",
      "password": "123456789"
    },
    {
      "username": "LiamThomas",
      "email": "liam.thomas@gmail.com",
      "password": "123456789"
    },
    {
      "username": "AvaJackson",
      "email": "ava.jackson@gmail.com",
      "password": "123456789"
    },
    {
      "username": "MasonLee",
      "email": "mason.lee@gmail.com",
      "password": "123456789"
    },
    {
      "username": "SophiaHarris",
      "email": "sophia.harris@gmail.com",
      "password": "123456789"
    },
    {
      "username": "LoganMoore",
      "email": "logan.moore@gmail.com",
      "password": "123456789"
    },
    {
      "username": "LilyNelson",
      "email": "lily.nelson@gmail.com",
      "password": "123456789"
    },
    {
      "username": "EthanSmith",
      "email": "ethan.smith@gmail.com",
      "password": "123456789"
    },
    {
      "username": "AveryTurner",
      "email": "avery.turner@gmail.com",
      "password": "123456789"
    },
    {
      "username": "EmmaWhite",
      "email": "emma.white@gmail.com",
      "password": "123456789"
    },
    {
      "username": "WilliamJohnson",
      "email": "william.johnson@gmail.com",
      "password": "123456789"
    }
];



connection.once('open', async () => {
    console.log('connected');
    // Delete the collections if they exist
    let userListCheck = await connection.db.listCollections({ name: 'user' }).toArray();
    if (userListCheck.length) {
        await connection.dropCollection('user');
    }

    // Create empty array to hold the students
    // Loop 20 times -- add students to the students array

    // Add students to the collection and await the results
    await User.collection.insertMany(userData);

    // Log out the seed data to indicate what should appear in the database
    console.table(User);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});