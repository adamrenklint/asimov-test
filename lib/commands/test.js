var Command = require('../Command');

module.exports = function testCommand (next) {

  var command = new Command();
  command.run(next);
};
