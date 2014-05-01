asimov-test
================

[![NPM version](https://badge.fury.io/js/asimov-test.png)](http://badge.fury.io/js/asimov-test) [![Code Climate](https://codeclimate.com/github/adamrenklint/asimov-test.png)](https://codeclimate.com/github/adamrenklint/asimov-test) [![Dependency Status](https://david-dm.org/adamrenklint/asimov-test.png?theme=shields.io)](https://david-dm.org/adamrenklint/asimov-test)

**Unit and integration testing toolkit for [asimov.js](http://asimovjs.org)**

## How to use

### Install from NPM

    $ npm install --saveDev asimov-test

### Create a test file

```
var test = require('asimov-test');

test('myAwesomeTest', function (test) {

  test.spec(function () {

    test.it('should be true', function () {
      expect(true).to.be.true;
    });
  });
});
```

### Add test command to your package.json

```
...
"scripts": {
  "test": "node node_modules/asimov-test/node_modules/mocha/bin/mocha tests/**/*.test.js"
}
...
```

### Run the tests

```
$ npm test
```

---

Made by [Adam Renklint](http://adamrenklint.com), Berlin 2014. [MIT licensed](https://github.com/adamrenklint/asimov-test/blob/master/LICENSE).