const { User } = require('../models');

const userData = [
    {
        username: "RecipeforDisaster",
        email: "recipe@gmail.com"
    },
    {
        username: "FabulousFinn",
        email: "finn@gmail.com",
    },
    {
        username: "BabyBilly",
        email: "babybilly@gmail.com",
    }
];

const seedUser = async () => {
    await User.deleteMany({});
    await User.insertMany(userData);
};

module.exports = seedUser;