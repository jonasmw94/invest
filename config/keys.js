// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  //prod
  module.exports = require('./prod');
} else {
  //dev
  module.exports = require('./dev');
}
