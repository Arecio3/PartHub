const router = require('express').Router();
const { Gpu } = require('../../models');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
    try {
      const data = await Gpu.findAll();
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
      const data = await Gpu.findByPk(req.params.id);
      res.status(200).json(data);
     } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/rank/:rank', async (req, res) => {
    try {
      const data = await Gpu.findAll({
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