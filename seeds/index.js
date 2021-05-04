const sequelize = require('../config/connection');
const seedCPU = require('./CPUData');
const seedGpu = require('./GpuData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCPU();

  await seedGPU();

  process.exit(0);
};

seedAll();
