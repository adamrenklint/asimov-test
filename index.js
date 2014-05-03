// Public interface

var Test = require('./lib/Test');
var test = new Test();

module.exports = test.run;

module.exports.Test = Test;
module.exports.Command = require('./lib/Command');
module.exports.AssertionHelper = require('./lib/AssertionHelper');
module.exports.RunnerInterface = require('./lib/RunnerInterface');