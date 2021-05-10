const CPU = require('./CPU');
const Gpu = require('./Gpu');
const Ram = require('./RAM');
const Hdd = require('./Hdd');
const Ssd = require('./Ssd');
const User = require('./user');
const Build = require('./build');
const UserBuild = require('./userbuild');

// CPU ASSOC
CPU.belongsToMany(Build, {
  through: {
    model:UserBuild,
}
});  
Build.belongsToMany(CPU,  {
  through: {
    model:UserBuild,
}
    });
// // gpu ASSOC
// Gpu.belongsToMany(Build, {
//   through: {
//     model:UserBuild,
// }
// });  
// Build.belongsToMany(Gpu,  {
//   through: {
//     model:UserBuild,
// }
//     });
// // ram ASSOC
// Ram.belongsToMany(Build, {
//   through: {
//     model:UserBuild,
// }
// });  
// Build.belongsToMany(Ram,  {
//   through: {
//     model:UserBuild,
// }
//     });

// // hdd ASSOC
// Hdd.belongsToMany(Build, {
//   through: {
//     model:UserBuild,
// }
// });  
// Build.belongsToMany(Hdd,  {
//   through: {
//     model:UserBuild,
// }
//     });
// // ssd ASSOC
// Ssd.belongsToMany(Build, {
//   through: {
//     model:UserBuild,
// }
// });  

// Build.belongsToMany(Ssd,  {
//   through: {
//     model:UserBuild,
// }
//     });
// User
User.hasMany(Build,{
       foreignKey:'build_id',
   })
   Build.belongsTo(User,{
    foreignKey:'build_id' ,  
   })
module.exports = { CPU, Gpu, Ram, Hdd,Ssd, User,Build };
