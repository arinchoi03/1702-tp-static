var db = require('./_db.js')
var Place = require('./place.js')
var Hotel = require('./hotel.js')
var Activity = require('./activity.js')
var Restaurant = require('./restaurant.js')

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;
