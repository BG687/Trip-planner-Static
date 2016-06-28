var express = require('express');
var router = express.Router();
var models = require('../models');



router.get('/', function(req, res, next){
  models.Place.findAll({})
  .then(function(result){
    res.send(result);
  })
  //res.send('hi');


  //res.render('index', {});
});

router.get('/about', function(req, res, next){



	res.render('about', {});
});


router.get('/contact', function(req, res, next){



	res.render('contact', {});
});



module.exports = router;
