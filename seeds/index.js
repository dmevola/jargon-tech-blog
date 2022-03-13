const seedPosts = require('./posts');
const seedUsers = require('./users');
const seedComments = require('./comments');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('DB SYNCED');

    await seedUsers();
s
    console.log('Users Seeded');

    await seedPosts();

    console.log('Posts Seeded');

    await seedComments();

    console.log('Comments Seeded');

    process.exit(0);

};


seedAll();