const router = require('express').Router();
const { Comment } = require('../../models');
// auth

router.get('/', async (req,res) => {
    try {
        const commentData = await Comment.findAll({});
        const comments = commentData.map((project) => project.get({ plain: true }));
        res.render('homepage', { comments });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;