// bd/postgres.js
const { Sequelize } = require('sequelize');
const config = require('../config/postgresConfig');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    timezone: config.timezone,
  }
);

module.exports = sequelize;
