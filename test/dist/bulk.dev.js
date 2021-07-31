"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('bulk', function () {
  it('should send bulk users', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/bulk/users', {
      items: [{
        method: 'post',
        data_type: 'user',
        data: {
          email: 'wash@serenity.io'
        }
      }, {
        method: 'post',
        data_type: 'user',
        data: {
          email: 'mal@serenity.io'
        }
      }]
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.bulk([{
      create: {
        email: 'wash@serenity.io'
      }
    }, {
      create: {
        email: 'mal@serenity.io'
      }
    }]).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should send bulk events', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/bulk/events', {
      items: [{
        method: 'post',
        data_type: 'event',
        data: {
          foo: 'bar'
        }
      }, {
        method: 'post',
        data_type: 'event',
        data: {
          bar: 'baz'
        }
      }]
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.events.bulk([{
      create: {
        foo: 'bar'
      }
    }, {
      create: {
        bar: 'baz'
      }
    }]).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
});