const { Sequelize } = require('sequelize');
const dbname = process.env.DB;
const username = process.env.USER;
const pass = process.env.PASS;
const host = process.env.HOST;
const portdb = process.env.PORTDB;

const db = new Sequelize(dbname, username, pass, {
    host: host,
    port: portdb,
    dialect:  'mysql'
  });

module.exports = { db };