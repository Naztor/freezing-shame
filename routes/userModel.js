var mongoose = require('mongoose');

//schema for inputing new users into the database.
var UserSchema = mongoose.Schema({username: 'string', password: 'string'});
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

//module.exports = mongoose.model('User', UserSchema);

