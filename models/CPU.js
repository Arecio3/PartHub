const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class CPU extends Model{}
CPU.init(
    {
          type: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          part_number: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          brand: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          model: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          rank: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          benchmark: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          samples: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          url: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          }


          
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'cpu',
      }
    );
    
    module.exports = CPU;