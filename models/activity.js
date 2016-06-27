var Sequelize = require('sequelize');
var db = require('./db');
var Place = require('./place');

var Activity = db.define('activity', {
  name : {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range : {
    type: Sequelize.STRING
  }
});

var Restaurant = db.define('restaurant', {
  name : {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine : {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
    set: function (cuisine) {

        cuisine = cuisine || [];

        if (typeof cuisine === 'string') {
            cuisine = cuisine.split(',').map(function (str) {
                return str.trim();
            });
        }
        this.setDataValue('cuisine', cuisine);
    }
  },
  price : {
    type: Sequelize.INTEGER,
    validate : {
      max : 5,
      min : 1
    }
  }
});


 module.exports = Activity