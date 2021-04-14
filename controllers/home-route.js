const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
    res.render('main')
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
module.exports = router;