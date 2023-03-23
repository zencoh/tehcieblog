const { User } = require('../models');

const userData = [{
        username: 'zencoh',
        password: 'password123'
    },
    {
        username: 'jordan',
        password: 'password123'
    },
    {
        username: 'carson',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;