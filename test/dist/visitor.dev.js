"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('visitors', function () {
  it('should be updated', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/visitors', {
      id: 'baz',
      email: 'foo@intercom.io'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.visitors.update({
      id: 'baz',
      email: 'foo@intercom.io'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should find by user_id', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/visitors').query({
      user_id: '1234-5678-9876'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.visitors.find({
      user_id: '1234-5678-9876'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should find by id', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/visitors/baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.visitors.find({
      id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('delete by id', function (done) {
    (0, _nock["default"])('https://api.intercom.io')["delete"]('/visitors/baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.visitors["delete"]({
      id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should convert to user', function (done) {
    var conversionObject = {
      visitor: {
        user_id: 'baz'
      },
      user: {
        email: 'bang'
      },
      type: 'user'
    };
    (0, _nock["default"])('https://api.intercom.io').post('/visitors/convert', conversionObject).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.visitors.convert(conversionObject).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should convert to lead', function (done) {
    var conversionObject = {
      visitor: {
        user_id: 'baz'
      },
      type: 'lead'
    };
    (0, _nock["default"])('https://api.intercom.io').post('/visitors/convert', conversionObject).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.visitors.convert(conversionObject).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
});