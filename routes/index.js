var Promise = require('bluebird');
var express = require('express')
var router = express.Router();
var Place = require('.././models').Place
var Hotel = require('.././models').Hotel
var Activity = require('.././models').Activity
var Restaurant = require('../models').Restaurant

router.get('/', function(req, res, next) {
    var infoList = {}
    Promise.all([Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()])
        .spread(function(hotelPromise, restPromise, actPromise) {
            res.render('index', {
                hotels: hotelPromise,
                restaurants: restPromise,
                activities: actPromise
            })
        })
        .catch(next)
})

module.exports = router;
