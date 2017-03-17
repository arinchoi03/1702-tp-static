var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {
  logging: false
})
var Place = ('./place.js')
var Hotel = ('./hotel.js')
var Activity = ('./activity.js')
var Restaurant = ('./restaurant.js')

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place)

module.exports = db;
