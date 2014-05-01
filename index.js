// Public interface

var Test = require('./lib/Test');
var test = new Test();
module.exports = test.run;

exports.Test = Test;
exports.Command = require('./lib/Command');
exports.AssertionHelper = require('./lib/AssertionHelper');
exports.RunnerInterface = require('./lib/RunnerInterface');