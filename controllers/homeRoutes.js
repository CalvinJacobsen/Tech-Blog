const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']]
        })
        const users = userData.map((project) => project.get({ plain: true }));
        // console.log(userData.dataValues.name);
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/homepage', (req, res) => {
    res.render('homepage', {
        session: req.session
    });
});

router.get('/dashboard', async (req, res) => {
    // if a session exists, redirect the request to homepage

    if (req.session.logged_in) {
        try {
            const userPostData = await Post.findAll({
                include: User
            });
            const posts = userPostData.map((post) => post.get({ plain: true }));
            console.log(posts)

            res.render('dashboard', {
                posts,
                session: req.session,
            });
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.render('login')
    }
});

router.get('/dashboard/newpost', (req, res) => {
    if (req.session.logged_in) {
        res.render('newpost', {
            session: req.session
        });
        return
    } else {
        res.render('login')
    }
});

router.get('/dashboard/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: User
        });

        const post = postData.get({ plain: true });
        // console.log(post)
        res.render('editpost', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    };
});




module.exports = router;