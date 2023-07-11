const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const sequelize = new Sequelize('bookart', dbUsername, dbPassword, {
  dialect: 'mysql',
  host: dbHost
});

module.exports = sequelize;
