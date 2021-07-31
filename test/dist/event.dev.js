"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('events', function () {
  it('should be created', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/events', {
      event_name: 'Foo',
      created_at: 1234,
      user_id: 'bar'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.events.create({
      event_name: 'Foo',
      created_at: 1234,
      user_id: 'bar'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should list by params', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/events').query({
      type: 'user',
      user_id: '1234'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.events.listBy({
      type: 'user',
      user_id: '1234'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
});