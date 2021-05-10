const router = require('express').Router();
const { User } = require('../../models');
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 993,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
        }
    });
    let body = {
      from:  process.env.EMAIL, // sender address
      to: req.body.email, // list of receivers
      subject: "Thank you for sign up with PartHub", // Subject line
      text: "thanks for signing up with us, now you can compare pc parts",
  }
  // send mail with defined transport object
 transporter.sendMail(body, (err, data) => {
  if(err) {
      console.log(err);
      return;
  } 
  console.log(data);
})
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.render('login',{loggedIn: req.session.loggedIn})
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Login
  router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          username: req.body.username,
         
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
      
         res.render('homepage',{loggedIn: req.session.loggedIn})
       
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Logout
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;