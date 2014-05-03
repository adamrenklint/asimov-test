asimov-test
================

[![NPM version](https://badge.fury.io/js/asimov-test.png)](http://badge.fury.io/js/asimov-test) [![Code Climate](https://codeclimate.com/github/adamrenklint/asimov-test.png)](https://codeclimate.com/github/adamrenklint/asimov-test) [![Dependency Status](https://david-dm.org/adamrenklint/asimov-test.png?theme=shields.io)](https://david-dm.org/adamrenklint/asimov-test)

**Unit and integration testing toolkit for [asimov.js](http://asimovjs.org)**

## How to use

### Install from NPM

    $ npm install --saveDev asimov-test

### Create a test file

```javascript
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

```javascript
...
"scripts": {
  "test": "node node_modules/asimov-test/bin/test"
}
...
```

### Run the tests

```javascript
$ npm test
```

Or just use the executable directly...

```javascript
$ node node_modules/asimov-test/bin/test
```

### Reporters

By default, the mocha **dot** reporter is used, but you can pass a flag to use any of the reporters that ships with mocha, or that you have installed with npm.

```javascript
$ node node_modules/asimov-test/bin/test --spec
```

---

Made by [Adam Renklint](http://adamrenklint.com), Berlin 2014. [MIT licensed](https://github.com/adamrenklint/asimov-test/blob/master/LICENSE).
