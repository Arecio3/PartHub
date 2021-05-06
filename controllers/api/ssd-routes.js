const router = require('express').Router();
const {Ssd} = require('../../models');

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
router.get('/ssd/:id', async (req, res) => {
  try {
    const data = await Ssd.findByPk(req.params.id);
    res.status(200).json(data);
   } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
