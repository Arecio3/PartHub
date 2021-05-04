const sequelize = require('../config/connection');
// const seedCPU = require('./CPUData');
 const seedGpu = require('./GpuData');

const seedAll = async () => {
  try{
    await sequelize.sync({ force: true });

    // await seedCPU();
  
    await seedGpu();
  
    process.exit(0);
  }
  catch (err){
    console.log(err);
  }
  
};

seedAll();
