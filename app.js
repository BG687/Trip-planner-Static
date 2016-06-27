var express = require('/express')
var app = express();

var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('routes');

app.engine('html', swig.renderFile); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
app.set('views', path.join(__dirname, '/views')); // where to find the views
swig.setDefaults({ cache: false });

app.use(morgan('dev'));

app.use('/', routes);

app.use(function(req, res, next) {
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

app.listen(3000);

