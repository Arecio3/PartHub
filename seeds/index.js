const sequelize = require('../config/connection');
const seedCPU = require('./CPUData');
const seedGpu = require('./GpuData');
const seedHdd = require('./hddData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCPU();

  await seedGPU();

  await seedHdd();

  await seedSsd();

  process.exit(0);
};

seedAll();
