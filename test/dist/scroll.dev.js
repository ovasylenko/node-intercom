"use strict";

var _bluebird = _interopRequireDefault(require("bluebird"));

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('scroll', function () {
  before(function () {
    (0, _nock["default"])('https://api.intercom.io').get('/users/scroll').times(3).reply(200, {
      type: 'user.list',
      scroll_param: '123_soleil',
      users: [{
        type: 'user',
        id: 'abc123',
        name: 'dummy user'
      }]
    });
    (0, _nock["default"])('https://api.intercom.io').get('/users/scroll?scroll_param=123_soleil').times(3).reply(200, {
      type: 'user.list',
      scroll_param: '123_soleil',
      users: []
    });
  });
  it('should get users with scroll', function (done) {
    var client = new _lib.Client('foo', 'bar');
    client.users.scroll.each({}, function (res) {
      _assert["default"].equal(200, res.statusCode);

      if (res.body.users.length === 0) {
        done();
      }
    });
  });
  it('should return a promise that resolves at the end of the scroll', function (done) {
    var client = new _lib.Client('foo', 'bar');
    var nbCalls = 0;
    var promise = client.users.scroll.each({}, function () {
      nbCalls++;
    });
    promise.then(function () {
      _assert["default"].equal(2, nbCalls);

      done();
    });
  });
  it('should wait for promises returned by the callback before scrolling', function (done) {
    var client = new _lib.Client('foo', 'bar');
    var nbCalls = 0;
    client.users.scroll.each({}, function (res) {
      nbCalls++;
      return res.body.users.length === 0 ? done() : new _bluebird["default"](function (resolve) {
        setTimeout(function () {
          _assert["default"].equal(1, nbCalls, 'hasn\'t re-scrolled before resolve');

          resolve();
        }, 500);
      });
    });
  });
});