const { Sequelize } = require('sequelize');
const dbname = process.env.DB;
const username = process.env.USER;
const pass = process.env.PASS;
const host = process.env.HOST;

const db = new Sequelize(dbname, username, pass, {
    host: host,
    dialect:  'mysql'
  });

module.exports = { db };