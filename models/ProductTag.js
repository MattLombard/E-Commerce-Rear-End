const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER, // INTEGER is a number
      allowNull: false, // cannot be null
      primaryKey: true, // is the primary key
      autoIncrement: true, // is auto incremented
    },
    product_id: {
      type: DataTypes.INTEGER, // INTEGER is a number
      references: { model: 'product', key: 'id' }, // references the product model's id
    },
    tag_id: {
      type: DataTypes.INTEGER, // INTEGER is a number
      references: { model: 'tag', key: 'id' }, // references the tag model's id
    },
  },
  {
    sequelize,
    timestamps: false, // no timestamps
    freezeTableName: true, // no plural table names
    underscored: true, // use underscores instead of camel-casing
    modelName: 'product_tag', // model name is product_tag
  }
);

module.exports = ProductTag;
