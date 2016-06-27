var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost/trip-planner');

module.exports = db;