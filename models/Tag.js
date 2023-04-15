const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER, // INTEGER is a number
      allowNull: false, // cannot be null
      primaryKey: true, // is the primary key
      autoIncrement: true, // is auto incremented
    },
    tag_name: {
      type: DataTypes.STRING, // STRING is a string
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
