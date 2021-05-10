const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserBuild extends Model {}

UserBuild.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cpu_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "cpu",
        key: "id",
      }
    },
    gpu_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "gpu",
          key: "id",
        }
      },
      ram_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "ram",
          key: "id",
        }
      },
      hdd_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "hdd",
          key: "id",
        }
      },
      ssd_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "ssd",
          key: "id",
        }
      },
    build_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "build",
        key: "id",
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_build',
  }
);

module.exports = UserBuild;
