// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER, // INTEGER is a number
      allowNull: false, // cannot be null
      primaryKey: true, // is the primary key
      autoIncrement: true, // is auto incremented
    },
    product_name: {
      // name of the product
      type: DataTypes.STRING, // STRING is a string
      allowNull: false, // cannot be null
    },
    price: {
      type: DataTypes.DECIMAL, // DECIMAL is a decimal
      allowNull: false, // cannot be null
      validate: { isDecimal: true }, // is a decimal
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: { isNumeric: true },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: { model: 'category', key: 'id' }, // references the category model's id
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
