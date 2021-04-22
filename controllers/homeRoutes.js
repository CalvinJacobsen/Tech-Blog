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
    return;
});

router.get('/signup', (req, res) => {
    res.render('signup');
    return;
});

router.get('/dashboard', (req, res) => {
    // if a session exists, redirect the request to homepage
    if (req.session.logged_in) {
        console.log("logged in:" + req.session.logged_in)
        res.render('dashboard')
        return
    } else {
        res.render('login')
    }
});

router.get('/dashboard/newpost', (req, res) => {
    res.render('newpost')
});

module.exports = router;