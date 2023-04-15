const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER, // INTEGER is a number
      allowNull: false, // cannot be null
      primaryKey: true, // is the primary key
      autoIncrement: true, // is auto incremented
    },
    category_name: {
      // name of the category
      type: DataTypes.STRING, // STRING is a string
      allowNull: false, // cannot be null
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
