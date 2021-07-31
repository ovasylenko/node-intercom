"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('conversations', function () {
  it('should be listed', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/conversations').query({
      foo: 'bar'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.conversations.list({
      foo: 'bar'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should find', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/conversations/bar').query({
      id: 'bar'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.conversations.find({
      id: 'bar'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should reply', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/conversations/bar/reply', {
      id: 'bar',
      baz: 'bang'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.conversations.reply({
      id: 'bar',
      baz: 'bang'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should mark as read', function (done) {
    (0, _nock["default"])('https://api.intercom.io').put('/conversations/bar', {
      read: true
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.conversations.markAsRead({
      id: 'bar'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
});