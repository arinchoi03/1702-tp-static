var Sequelize = require('sequelize')
var db = require('./_db.js')

var activityModel = {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range: {
    type: Sequelize.STRING,
  }
}

var Activity = db.define('activity', activityModel)

module.exports = Activity;
