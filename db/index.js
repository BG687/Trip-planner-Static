var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost/trip-planner');

var Place = db.define('place', {
  address : {
    type: Sequelize.TEXT,
    allowNull: false
  },
  city : {
    type: Sequelize.STRING,
    allowNull: false
  },
  state : {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone : {
    type: Sequelize.STRING,
    allowNull: false
  },
  location : {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    alowNull: false
  }
});

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

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = db;
