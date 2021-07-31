"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('segments', function () {
  it('should be listed', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/segments').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.segments.list().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('find by id', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/segments/baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.segments.find({
      id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
});