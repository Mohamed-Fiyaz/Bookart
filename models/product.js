const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allownull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allownull: false
  },
  description: {
    type: Sequelize.STRING,
    allownull: false,
  },
  detail: {
    type: Sequelize.STRING(2000),
    allownull: false
  }
});

module.exports = Product;