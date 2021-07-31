"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('notes', function () {
  it('should be created', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/notes', {
      foo: 'bar'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.notes.create({
      foo: 'bar'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should list', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/notes').query({
      foo: 'bar'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.notes.list({
      foo: 'bar'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should find notes by id', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/notes/bar').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.notes.find({
      id: 'bar'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
});