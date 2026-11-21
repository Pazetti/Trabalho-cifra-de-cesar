const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  // Nos testes usamos DB_STORAGE=':memory:' (banco temporário, some ao terminar)
  storage: process.env.DB_STORAGE || path.join(__dirname, '..', 'database.sqlite'),
  logging: false,
});

module.exports = sequelize;
