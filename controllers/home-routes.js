const router = require('express').Router();
const { User,CPU } = require('../models');
const { Op } = require("sequelize");
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
// cpu.handlebars
router.get('/cpu', async(req, res) => {
  try {
    const data = await CPU.findAll({
      where:{
        rank:{
          [Op.between]:[1,10]
        }
      }
    });
    const cpuList = data.map((cpu) =>
    cpu.get({ plain: true })
  );
  const data2 = await CPU.findAll({
    where:{
      samples:{
        [Op.between]:[300000,820000]
      }
    },
    order: [['samples', 'DESC']]
  });
  const cpuPop = data2.map((cpu) =>
 cpu.get({ plain: true })
);
  


    res.render('cpu',{cpuList,cpuPop});
    
    }
    catch (err) {
      console.log(err);
      console.log("errrrow")
    }
  
});


// /register post to process the data and add user to the database.

module.exports = router;