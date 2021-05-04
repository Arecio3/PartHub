const sequelize = require('../config/connection');

const seedCPU = require('./CPUData');
const seedGpu = require('./gpuData');
const seedHdd = require('./hddData');
const seedSsd = require('./ssdData');


const seedAll = async () => {
  try{
    await sequelize.sync({ force: true });

    // await seedCPU();
  

  await seedCPU();

  await seedGpu();

  await seedHdd();

  await seedSsd();

 
    process.exit(0);
  }
  catch (err){
    console.log(err);
  }
  
  

};

seedAll();
