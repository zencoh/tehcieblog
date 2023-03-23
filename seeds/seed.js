const seedUsers = require('./userSeed');
const seedPosts = require('./postSeed');
const seedComments = require('./commentSeed');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  await seedComments();

  process.exit(0);
};

seedDatabase();