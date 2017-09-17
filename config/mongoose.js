var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function(){
var db = mongoose.connect(config.rhel_mongo, {
  useMongoClient: true
});

require('../app/models/user.server.model.js');

return db;
}
