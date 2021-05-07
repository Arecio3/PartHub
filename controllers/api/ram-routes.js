const router = require('express').Router();
const { Ram } = require('../../models');
const { Op } = require("sequelize");
router.get('/', async (req, res) => {
    try {
      const data = await Ram.findAll();
     res.status(200).json(data);
      }
     catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // GET one Ram by its ID
  router.get('/:id', async (req, res) => {
    try {
      const data = await Ram.findByPk(req.params.id);
      console.log(req.params.id);
      res.status(200).json(data);
     } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/rank/:rank', async (req, res) => {
    try {
      const data = await Ram.findAll({
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