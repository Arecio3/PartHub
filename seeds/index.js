const sequelize = require('../config/connection');

 const seedCPU = require('./CPUData');
 const seedGpu = require('./gpuData');
 const seedHdd = require('./hddData');
const seedSsd = require('./ssdData');
const seedRam = require('./RAMData')
const seedUser = require('./userData')

const seedAll = async () => {
  try{
    await sequelize.sync({ force: true });

      await seedCPU();
      await seedGpu();
      await seedHdd();
     await seedSsd();
     await seedRam();
    await seedUser();
 
    process.exit(0);
  }
  catch (err){
    console.log(err);
  }
  
  

};

seedAll();
