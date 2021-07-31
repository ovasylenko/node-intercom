"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('admins', function () {
  it('should be listed', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/admins').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.admins.list().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should find current admin', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/me').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.admins.me().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should find admins by id', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/admins/baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.admins.find('baz').then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should update admin away mode and reassign settings', function (done) {
    (0, _nock["default"])('https://api.intercom.io').put('/admins/baz/away', {
      away_mode_enabled: true,
      away_mode_reassign: false
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.admins.away('baz', {
      away_mode_enabled: true,
      away_mode_reassign: false
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
});