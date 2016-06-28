var express = require('express');
var app = express();
var bluebird = require('bluebird');
var swig = require('swig');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('./routes');

app.engine('html', swig.renderFile); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
app.set('views', path.join(__dirname, '/views')); // where to find the views
swig.setDefaults({ cache: false });
app.use(morgan('dev'));

app.use('/bootstrap/', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jquery/', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);


app.listen(3000, function(){
  console.log('listening on port 3000')
});


app.use(function(req, res, next) { // Unclear if this is necessary
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render(
    "You have encountered an error"
  );
});

