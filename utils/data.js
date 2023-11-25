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

const ThoughtData = [
    {
      "thoughtText": "King Ben Posting for the First time"
    },
    {
      "thoughtText": "User123 Excited to Share Thoughts"
    },
    {
      "thoughtText": "CodingMaster123 Exploring New Ideas"
    },
    {
      "thoughtText": "TechGeek007 Diving into the Tech World"
    },
    {
       
      "thoughtText": "NatureLover22 Connecting with Mother Earth"
    },
    {
       
      "thoughtText": "BookWorm88 Sharing Favorite Reads"
    },
    {
       
      "thoughtText": "MusicFanatic99 Grooving to the Beats"
    },
    {
       
      "thoughtText": "TravelExplorer765 Wanderlust Adventures"
    },
    {
       
      "thoughtText": "FoodieDelight Yummy Experiences Await!"
    },
    {
       
      "thoughtText": "ArtisticSoul123 Creating Beauty in Every Stroke"
    },
    {
       
      "thoughtText": "FitnessEnthusiast1 Pursuing a Healthy Lifestyle"
    },
    {
       
      "thoughtText": "MovieBuff456 Exploring Cinematic Wonders"
    },
    {
       
      "thoughtText": "Fashionista789 Stylish Moments Unleashed"
    },
    {
       
      "thoughtText": "ScienceNerd22 Unraveling the Mysteries"
    },
    {
       
      "thoughtText": "GamerPro666 Conquering Virtual Realms"
    },
    {
       
      "thoughtText": "DreamChaser123 Turning Dreams into Reality"
    },
    {
       
      "thoughtText": "DIYEnthusiast444 Crafting Magic at Home"
    },
    {
       
      "thoughtText": "PetLover777 Embracing Furry Companions"
    },
    {
       
      "thoughtText": "PhotographyWizard Capturing Moments in Pixels"
    },
    {
       
      "thoughtText": "MindfulnessSeeker111 Finding Peace Within"
    }
]


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomThought(thoughtData) {
    return ThoughtData[getRandomInt(ThoughtData.length)].thoughtText;
}



  
module.exports = userData, getRandomThought(ThoughtData);
