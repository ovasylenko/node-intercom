"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('clients', function () {
  it('should resolve promises', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/users').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();

    _assert["default"].equal(true, client.promises);

    client.users.list().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should use promises when callbacks are absent', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/users').reply(200, {});
    var client = new _lib.Client('foo', 'bar');
    client.users.list().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should reject promises', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/users').reply(200, {
      type: 'error.list'
    });
    var client = new _lib.Client('foo', 'bar').usePromises();

    _assert["default"].equal(true, client.promises);

    client.users.list()["catch"](function (err) {
      _assert["default"].deepStrictEqual({
        type: 'error.list'
      }, err.body);

      done();
    });
  });
  it('should reject promises with error objects', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/users').reply(200, {
      type: 'error.list'
    });
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.list()["catch"](function (err) {
      _assert["default"].equal(true, err instanceof Error);

      done();
    });
  });
  it('should callback with errors', function (done) {
    var callback = function callback(err, d) {
      _assert["default"].equal('error.list', err.body.type);

      _assert["default"].equal(null, d);

      done();
    };

    var client = new _lib.Client('foo', 'bar');
    client.callback(callback, {
      body: {
        type: 'error.list'
      }
    });
  });
  it('should not crash if the callback is missing', function () {
    var client = new _lib.Client('foo', 'bar');

    _assert["default"].doesNotThrow(function () {
      client.callback();
    });
  });
  it('should construct with two fields', function () {
    var client = new _lib.Client('foo', 'bar');

    _assert["default"].equal('foo', client.usernamePart);

    _assert["default"].equal('bar', client.passwordPart);
  });
  it('should construct with an object', function () {
    var client = new _lib.Client({
      appId: 'foo',
      appApiKey: 'bar'
    });

    _assert["default"].equal('foo', client.usernamePart);

    _assert["default"].equal('bar', client.passwordPart);
  });
  it('should construct with an object containing an OAuth token', function () {
    var client = new _lib.Client({
      token: 'foo'
    });

    _assert["default"].equal('foo', client.usernamePart);

    _assert["default"].equal('', client.passwordPart);
  });
  it('should throw if no credentials found', function () {
    _assert["default"]["throws"](function () {
      var client = new _lib.Client('baz');
      console.log(client.usernamePart);
    }, /Could not construct a client with those parameters/);
  });
});