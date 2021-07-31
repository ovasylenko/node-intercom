"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('tags', function () {
  it('should be created/updated', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/tags').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.tags.create({
      name: 'haven'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should tag users and companies', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/tags', {
      name: 'haven',
      users: [{
        id: '5534534'
      }]
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.tags.tag({
      name: 'haven',
      users: [{
        id: '5534534'
      }]
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should untag users', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/tags', {
      name: 'haven',
      users: [{
        id: '5534534',
        untag: true
      }]
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.tags.untag({
      name: 'haven',
      users: [{
        id: '5534534'
      }]
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should untag companies', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/tags', {
      name: 'haven',
      companies: [{
        id: '5534534',
        untag: true
      }]
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.tags.untag({
      name: 'haven',
      companies: [{
        id: '5534534'
      }]
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should delete tags', function (done) {
    (0, _nock["default"])('https://api.intercom.io')["delete"]('/tags/baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.tags["delete"]({
      id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should list', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/tags').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.tags.list().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
});