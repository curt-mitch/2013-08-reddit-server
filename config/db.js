var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

module.exports = function(app, config) {
  var db = mongoose.connect(config.db);

  // Setup database and UserSchema
  var UserSchema = new Schema({
    username: {type: 'string', index: {unique: true}},
    password: 'string'
  });

  // UserSchema.virtual('password').set(function(pass) {
  //   this.hashed_password = pass;
  // });

  mongoose.model('User', UserSchema);

  return db;
};