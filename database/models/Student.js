const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://i.imgur.com/V4RclNb.png",
    validate: { isUrl: true }
  }

});

module.exports = Student;