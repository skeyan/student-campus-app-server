const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  description: {
    type: Sequelize.STRING,
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://i.imgur.com/U0xAFnj.png",
    validate:{ isUrl: true }
  }
});

module.exports = Campus;