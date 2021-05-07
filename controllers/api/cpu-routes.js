const router = require('express').Router();
const {CPU} = require('../../models');
const { Op } = require("sequelize");

// GET all CPU 
router.get('/', async (req, res) => {
  try {
    const data = await CPU.findAll();
   res.status(200).json(data);
    }
   catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one CPU by its ID
router.get('/:id', async (req, res) => {
  try {
    const data = await CPU.findByPk(req.params.id);
    res.status(200).json(data);
   } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all CPU by rank
router.get('/rank/:rank', async (req, res) => {
  try {
    const data = await CPU.findAll({
      where:{
        rank:{
          [Op.between]:[1,req.params.rank]
        }
      }
    });
   res.status(200).json(data);
    }
   catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
