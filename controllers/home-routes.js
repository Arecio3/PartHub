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
// /register post to process the data and add user to the database.

module.exports = router;