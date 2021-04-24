const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

var currentDateAndTime = require('moment')().format('MMM Do YYYY, hh:mm A');

router.post('/createpost', async (req, res) => {
    
    console.log(currentDateAndTime)
    try {
        const newPost = await Post.create({
            title: req.body.title,
            author: req.session.user_name,
            post_date: currentDateAndTime,
            content: req.body.contents,
            user_id: req.session.user_id
        });
        console.log(newPost)
        res.status(200).json(newPost);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/editpost', async (req, res) => {
    console.log(req.params.id)
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: User
        });
        const post = postData.get({ plain: true });
        console.log(post)

        const updatedPost = await Post.update({
            title: req.body.newTitle,
            content: req.body.newContents,
        });
        console.log(updatedPost)
        res.status(200).json(updatedPost);

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;