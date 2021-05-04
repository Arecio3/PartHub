const router = require('express').Router();
const { Gpu } = require('../models');

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
  router.get('/gpu/:id', async (req, res) => {
    try {
      const data = await Gpu.findByPk(req.params.id);
      res.status(200).json(data);
     } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
 
  module.exports = router;