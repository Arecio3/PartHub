const router = require('express').Router();
const { User } = require('../models');
// homepage.handlebars
router.get('/', (req, res) => {
  res.render('homepage')
});
// register.handlebars
router.get('/register', (req, res) => {
  res.render('register')
});
// login.handlebars
router.get('/login', (req, res) => {
  res.render('login');
});


// /register post to process the data and add user to the database.

module.exports = router;