const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Build extends Model { }

Build.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        cpu_id:{
            type: DataTypes.INTEGER,
            allowNull:true,
            references: {
                model: 'cpu',
                key: 'id',
              },
         
        },
        gpu_id:{
            type: DataTypes.INTEGER,
            allowNull:true, 
            references: {
                model: 'gpu',
                key: 'id',
              },
        },
        ram_id:{
            type: DataTypes.INTEGER,
            allowNull:true,
            references: {
                model: 'ram',
                key: 'id',
              },
        },
        hdd_id:{
            type: DataTypes.INTEGER,
            allowNull:true,
            references: {
                model: 'hdd',
                key: 'id',
              },
        },
        ssd_id:{
            type: DataTypes.INTEGER,
            allowNull:true,
            references: {
                model: 'ssd',
                key: 'id',
              },
        }
    },
    {
        sequelize,
        freezeTableName: true,
         underscored: true,
        
        modelName: 'build',
      }
);

module.exports = Build;