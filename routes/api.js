var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Blog_database');

//schema for inputing new posts in the blog
var BlogSchema = mongoose.Schema({ username: 'string', title: 'string', post: 'string', tag: {type: 'string', default: ''} });
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
    $set: { username: req.body.username, title: req.body.title, post: req.body.post, tag: req.body.tag }
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

