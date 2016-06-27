var Sequelize = require('sequelize');
var db = require('./db');
var Place = require('./place');

var Hotel = db.define('hotel', {
  name : {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars : {
    type: Sequelize.INTEGER,
    validate : {
      max : 5,
      min : 1
    }
  },
  amenities : {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
    set: function (amenities) {

        amenities = amenities || [];

        if (typeof amenities === 'string') {
            amenities = amenities.split(',').map(function (str) {
                return str.trim();
            });
        }

        this.setDataValue('amenities', amenities);

    }
  }
});


module.exports = Hotel;
