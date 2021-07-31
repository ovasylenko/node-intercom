"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('messages', function () {
  it('should be created', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/messages', {
      message_type: 'foo'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.messages.create({
      message_type: 'foo'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
});