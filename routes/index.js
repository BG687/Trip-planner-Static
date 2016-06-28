var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require('bluebird');
var activities = models.Activity;
var hotels = models.Hotel;
var places = models.Place;
var restaurants  = models.Restaurant;


router.get('/', function(req, res, next){
/*  models.Place.findAll({})
  .then(function(result){
    res.send(result);
  })*/
  Promise.all([activities.findAll({}), hotels.findAll({}), places.findAll({}), restaurants.findAll({})])
  .then(function(result){
    res.send(result);
  })
  .catch(console.error);

  //res.render('index', {});
});

router.get('/about', function(req, res, next){



	res.render('about', {});
});


router.get('/contact', function(req, res, next){



	res.render('contact', {});
});



module.exports = router;
