const router = require('express').Router();
const { Ram } = require('../../models');

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
  router.get('/ram/:id', async (req, res) => {
    try {
      const data = await Ram.findByPk(req.params.id);
      console.log(req.params.id);
      res.status(200).json(data);
     } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
 
  module.exports = router;