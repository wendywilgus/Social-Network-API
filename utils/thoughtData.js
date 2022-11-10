const { Thoughts } = require('../models');

const thoughtData =[
    {
        thoughtText: "This recipe needed more salt",
        username: "RecipeforDisaster",
        reactions: {
            reactionBody: "I used hot sauce instead!",
            username: "FabulousFinn"
        }
    },
    {
        thoughtText: "I doubled the recipe.",
        username: "FabulousFinn",
        reactions: {
            reactionBody: "Me, too! The leftovers were great!",
            username: "BabyBilly"
        }
    },
    {
        thoughtText: "I needed an extra 10 minutes for the cook time.",
        username: "BabyBilly",
        reactions: {
            reactionBody: "Every oven is different!",
            username: "RecipeforDisaster"
        }
    },
];

const seedThought = async () => {
    await Thoughts.deleteMany({});
    await Thoughts.insertMany(thoughtData);
};

module.exports = seedThought;