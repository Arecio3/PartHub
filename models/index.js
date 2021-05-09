const CPU = require('./CPU');
const Gpu = require('./Gpu');

const Ram = require('./RAM');
const Hdd = require('./Hdd');
const Ssd = require('./Ssd');
const User = require('./user');
const Build = require('./build');
const { build } = require('./CPU');

Build.hasOne(CPU, {
    foreignKey: 'cpu_id',
  });
  Build.hasOne(Gpu, {
    foreignKey: 'gpu_id',
  });
  Build.hasOne(Ram, {
    foreignKey: 'ram_id',
  });
  Build.hasOne(Ssd, {
    foreignKey: 'ssd_id',
  });
  Build.hasOne(Hdd, {
    foreignKey: 'hdd_id',
  });
  CPU.belongsTo(Build, {
    foreignKey: 'cpu_id',
  });
  Gpu.belongsTo(Build, {
    foreignKey: 'gpu_id',
  });
 Ram.belongsTo(Build, {
    foreignKey: 'ram_id',
  });
  Hdd.belongsTo(Build, {
    foreignKey: 'hdd_id',
  });
  Ssd.belongsTo(Build, {
    foreignKey: 'ssd_id',
  });
  User.hasMany(Build,{
      foreignKey:'build_id'
  })
  Build.belongsTo(User,{
   foreignKey:'build_id'   
  })
module.exports = { CPU, Gpu, Ram, Hdd,Ssd, User,Build };
