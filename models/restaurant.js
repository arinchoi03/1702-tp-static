var Sequelize = require('sequelize')
var db = require('./_db.js')


var restaurantModel = {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
}

var Restaurant = db.define('restaurant', restaurantModel)

module.exports = Restaurant;
