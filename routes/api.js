var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Blog_database');

//schema for inputing new posts in the blog
var BlogSchema = mongoose.Schema({ firstname: 'string', lastname: 'string', age: 'number', post: 'string', tag:'string' });
var Blog = mongoose.model('Blog', BlogSchema);

exports.Blogs = function(req, res) {
  Blog.find({}, function(err, obj) {
    res.json(obj);
  });
};

exports.Blog = function(req, res) {
  Blog.findOne({ _id: req.params.id }, function(err, obj) {
    res.json(obj);
  });
};

exports.createBlog = function(req, res) {
  var blog = new Blog(req.body);
  blog.save();
  res.json(req.body);
};

exports.updateBlog = function(req, res) {
  Blog.findByIdAndUpdate(req.params.id, {
    $set: { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age, post: req.body.post, tag: req.body.tag }
  }, { upsert: true },
  function(err, obj) {
    return res.json(true);
  });
};

exports.destroyBlog = function(req, res) {
  Blog.remove({ _id: req.params.id }, function(err) {
    res.json(true);
  });
};

//schema for inputing new users into the database.
var UserSchema = mongoose.Schema({username: 'string', password: 'string', email: 'string'});
var User = mongoose.model('User', UserSchema);

exports.Users = function(req, res) {
  User.find({}, function(err, obj) {
    res.json(obj);
  });
};

exports.User = function(req, res) {
  User.findOne({ _id: req.params.id }, function(err, obj) {
    res.json(obj);
  });
};

exports.createUser = function(req, res) {
  var user = new User(req.body);
  user.save();
  res.json(req.body);
};

exports.updateUser = function(req, res) {
  User.findByIdAndUpdate(req.params.id, {
    $set: { password: req.body.password}
  }, { upsert: true },
  function(err, obj) {
    return res.json(true);
  });
};

