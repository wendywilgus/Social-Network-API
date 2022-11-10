const seedThought = require('./thoughtData');
const seedUser = require('./userData');
const connection = require('../config/connection');

connection.on('err', (err) => err);

connection.once('open', async () => {
    console.log("Seeding thought data.");
    await seedThought();
    console.log("Seeding user data.");
    await seedUser();

    process.exit(0);

});