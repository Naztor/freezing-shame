var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api');


var app = module.exports = express();

var http = require('http');
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var user = require('./routes/userModel');

passport.use(new LocalStrategy(
  function(username, password, done) {
    if (username === "admin" && password === "admin") // fulhack in absurdum
      return done(null, {name: "admin"}, {message:"hej"});

    return done(null, false, { message: 'Incorrect username.' });
  }
));

// Behövs för passport.
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

// Används varje gång man ber passport att kolla om användaren är autentiserad
var auth = function(req, res, next){
  if (!req.isAuthenticated())
    res.send(401);
  else
    next();
};

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  

  app.use(express.cookieParser());
  app.use(express.session({ secret: 'securedsession' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.get('/loggedin', function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
});

app.post('/login', passport.authenticate('local'), function(req, res) {
  res.send(req.user);
});

app.post('/logout', function(req, res){
  req.logOut();
  res.send(200);
});

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

app.get('/api/blog', api.Blogs);
app.get('/api/blog/:id', api.Blog);
app.post('/api/blog', api.createBlog);
app.put('/api/blog/:id', api.updateBlog);
app.delete('/api/blog/:id', api.destroyBlog);
app.get('/userModel/user', user.Users);
app.get('/userModel/user/:id', user.User);
app.post('/userModel/user', user.createUser);
app.put('/userModel/user/:id', user.updateUser);

app.get('*', routes.index);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
