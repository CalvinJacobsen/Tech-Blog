const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


var currentDateAndTime = require('moment')().format('MMM Do YYYY, hh:mm A');

router.post('/newpost', async (req, res) => {

    try {
        const newPost = await Post.create({
            title: req.body.title,
            author: req.session.user_name,
            post_date: currentDateAndTime,
            content: req.body.contents,
            user_id: req.session.user_id
        });
        //console.log(newPost)
        res.status(200).json(newPost);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/:id/newcomment', async (req, res) => {

    try {
        const newComment = await Comment.create({
            comment_date: currentDateAndTime,
            comment_content: req.body.commentContents,
            author: req.session.user_name,
            user_id: req.session.user_id,
            post_id: req.params.id
        });

        //console.log(newComment)
        res.status(200).json(newComment);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/editpost/:id', async (req, res) => {

    try {
        await Post.findByPk(req.params.id).then((post) => {
            //updating the contents to new title/contents
            post.update({
                title: req.body.title,
                content: req.body.content
            }).then((post) => {


                res.json(post);
            });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id/delete', async (req, res, next) => {

    try {
        const postData = await Post.findByPk(req.params.id);
        

        Comment.destroy({where: {
            post_id: req.params.id
        }});

        postData.destroy();

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;