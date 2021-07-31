"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('clients', function () {
  it('ping', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/admins').reply(200, {});
    var client = new _lib.Client('foo', 'bar');
    client.ping(function (r) {
      _assert["default"].equal(200, r);

      done();
    });
  });
  it('paginate', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/foo/bar/baz').query({
      blue: 'red'
    }).reply(200, {
      foo: 'bar'
    });
    var client = new _lib.Client('foo', 'bar').usePromises();
    var paginationObject = {
      next: 'https://api.intercom.io/foo/bar/baz?blue=red'
    };
    client.nextPage(paginationObject).then(function (r) {
      _assert["default"].deepEqual({
        foo: 'bar'
      }, r.body);

      done();
    });
  });
  it('should compute user hashes', function () {
    _assert["default"].equal('c8acc43edc084edb8207a50320ba4ec5d113686cf8050274a305480c98512e45', _lib.IdentityVerification.userHash({
      secretKey: 'bar',
      identifier: 'baz'
    }));
  });
});