var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport'); 
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy( 
  function(username, password, done) { 
    Account.findOne({ username: username }, function (err, user) { 
      if (err) { return done(err); } 
      if (!user) { 
        return done(null, false, { message: 'Incorrect username.' }); 
      } 
      if (!user.validPassword(password)) { 
        return done(null, false, { message: 'Incorrect password.' }); 
      } 
      return done(null, user); 
    }); 
  } 
))

const connectionString =  'mongodb+srv://S544925:De%40dp00l@cluster0.cofhu.mongodb.net/learnMongo?retryWrites=true&w=majority'
mongoose = require('mongoose');
mongoose.connect(connectionString,
{
useNewUrlParser: true,
useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jewelryRouter = require('./routes/jewelry');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
const jewelry = require('./models/jewelry');
var resource = require("./routes/resource");

async function recreateDB(){
  // Delete everything
  await jewelry.deleteMany();
  
  let instance1 = new jewelry({
   brand:"SVNR", material:"Gold",
 cost:"Fifty USD"});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
  });
  let instance2 = new jewelry({
   brand: "Idyl",
   material: "$Silver",
   cost: "Six hundred USD"
 });
 instance2.save(function (err, doc) {
   if (err) return console.error(err);
   console.log("Second object saved")
 });
 let instance3 = new jewelry({
   brand: "Kinn Studio",
   brand: "Platinum",
   cost: "Three hundred USD"
 });
 instance3.save(function (err, doc) {
   if (err) return console.error(err);
   console.log("Third object saved")
 });
 }
 let reseed = true;
 if (reseed) { recreateDB();}
 
 var app = express();

 // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({ 
  secret: 'keyboard cat', 
  resave: false, 
  saveUninitialized: false 
})); 
app.use(passport.initialize()); 
app.use(passport.session()); 
app.use(express.static(path.join(__dirname, 'public')));

//var jewelrydetail = require("./routes/jewelrydetail");
// We can seed the collection if needed on
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded");
});


// We can seed the collection if needed on



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jewelry', jewelryRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource',resource);

var Account =require('./models/account'); 
 
passport.use(new LocalStrategy(Account.authenticate())); 
passport.serializeUser(Account.serializeUser()); 
passport.deserializeUser(Account.deserializeUser()); 
 
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});