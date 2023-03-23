const { Post } = require('../models');

const postData = [{
        title: 'test',
        content: 'This is a test',
        user_id: 1

    },
    {
        title: 'Javascript',
        content: 'I used a lot of javascript for this project',
        user_id: 2
    },
    {
        title: 'Webpage',
        content: 'Webpage works good',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;