// Port
const PORT = 3000
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//setting view engine to ejs
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



const server = app.listen(PORT, () =>
    console.log(`Server Connected to port ${PORT} 
    \n\n\nViews erj on:
    \n///////////////
    \nlocalhost:3000
    \n///////////////
    \n\nOthers on:
    \n///////////////////////////////
    \nlocalhost:3000/produits
    \nlocalhost:3000/produits/1
    \nlocalhost:3000/produits/1
    \nlocalhost:3000/produits/inscription
    \n///////////////////////////////`)
)
module.exports = app;
