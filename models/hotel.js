var db = require('./index.js')

var hotelModel = {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT,
    validate: {
      min: 1,
      max: 5
    }
  },
  amenities: {
    type: Sequelize.STRING,
  }
}

var Hotel = db.define('hotel', hotelModel)


module.exports = Hotel;
