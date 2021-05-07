const router = require('express').Router();
const {Ssd} = require('../../models');
const { Op } = require("sequelize");

// GET all Sdd 
router.get('/', async (req, res) => {
  try {
    const data = await Ssd.findAll();
   res.status(200).json(data);
    }
   catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Sdd by its ID
router.get('/:id', async (req, res) => {
  try {
    const data = await Ssd.findByPk(req.params.id);
    res.status(200).json(data);
   } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/rank/:rank', async (req, res) => {
  try {
    const data = await Ssd.findAll({
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
