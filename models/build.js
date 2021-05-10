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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: 'user',
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