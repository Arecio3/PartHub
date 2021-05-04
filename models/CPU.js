const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class CPU extends Model{}
CPU.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
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
            type: DataTypes.INTEGER,
            allowNull: false,
          },


          
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'cpu',
      }
    );
    
    module.exports = CPU;