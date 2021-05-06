const router = require('express').Router();
const {Hdd} = require('../../models');

// GET all Hdd 
router.get('/', async (req, res) => {
  try {
    const data = await Hdd.findAll();
   res.status(200).json(data);
    }
   catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Hdd by its ID
router.get('/hdd/:id', async (req, res) => {
  try {
    const data = await Hdd.findByPk(req.params.id);
    res.status(200).json(data);
   } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
