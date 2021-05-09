const router = require('express').Router();
const { User,CPU, Ram, Hdd, Ssd, Gpu } = require('../models');
const { Op } = require("sequelize");
const { log } = require('handlebars');
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

// ram handlebars
router.get('/ram', async(req, res) => {
  try {
    const data = await Ram.findAll({
      where:{
        rank:{
          [Op.between]:[1,10]
        }
      }
    });
    const ramList = data.map((ram) =>
    ram.get({ plain: true })
  );
  const data2 = await Ram.findAll({
    where:{
      samples:{
        [Op.between]:[100000,470000]
      }
    },
    order: [['samples', 'DESC']]
  });
  const ramPop = data2.map((ram) =>
 ram.get({ plain: true })
);
  


    res.render('ram',{ramList,ramPop});
    
    }
    catch (err) {
      console.log(err);
      console.log("errrrow")
    }
  
});

// gpu handlebars
router.get('/gpu', async(req, res) => {
  try {
    const data = await Gpu.findAll({
      where:{
        rank:{
          [Op.between]:[1,10]
        }
      }
    });
    const gpuList = data.map((gpu) =>
    gpu.get({ plain: true })
  );
  const data2 = await Gpu.findAll({
    where:{
      samples:{
        [Op.between]:[170000,270000]
      }
    },
    order: [['samples', 'DESC']]
  });
  const gpuPop = data2.map((gpu) =>
 gpu.get({ plain: true })
);
  


    res.render('gpu',{gpuList,gpuPop});
    
    }
    catch (err) {
      console.log(err);
      console.log("errrrow")
    }
  
});


// hdd handlebars
router.get('/hdd', async(req, res) => {
  try {
    const data = await Hdd.findAll({
      where:{
        rank:{
          [Op.between]:[1,10]
        }
      }
    });
    const hddList = data.map((hdd) =>
    hdd.get({ plain: true })
  );
  const data2 = await Hdd.findAll({
    where:{
      samples:{
        [Op.between]:[150000,200000]
      }
    },
    order: [['samples', 'DESC']]
  });
  const hddPop = data2.map((hdd) =>
 hdd.get({ plain: true })
);
  


    res.render('hdd',{hddList,hddPop});
    
    }
    catch (err) {
      console.log(err);
      console.log("errrrow")
    }
  
});

router.get('/ssd', async(req, res) => {
  try {
    const data = await Ssd.findAll({
      where:{
        rank:{
          [Op.between]:[1,10]
        }
      }
    });
    const ssdList = data.map((ssd) =>
    ssd.get({ plain: true })
  );
  const data2 = await Ssd.findAll({
    where:{
      samples:{
        [Op.between]:[500000,800000]
      }
    },
    order: [['samples', 'DESC']]
  });
  const ssdPop = data2.map((ssd) =>
 ssd.get({ plain: true })
);
  


    res.render('ssd',{ssdList,ssdPop});
    
    }
    catch (err) {
      console.log(err);
      console.log("errrrow")
    }
  
});



// /register post to process the data and add user to the database.

module.exports = router;