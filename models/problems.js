var orm = require('../config/orm.js');

var problem = {
  all: function (cb) {
    orm.all('problems', function (res) {
      cb(res);
    });
  }
};

module.exports = problem;