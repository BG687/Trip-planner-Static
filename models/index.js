var db = require('./db')
var Place = require('./place');
var Activity = require('./activity');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

