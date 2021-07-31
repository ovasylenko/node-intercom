"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('errors', function () {
  describe('with promises', function () {
    it('should fail with ESOCKETTIMEDOUT error', function () {
      var socketErr = new Error('Socket timeout');
      socketErr.code = 'ESOCKETTIMEDOUT';
      (0, _nock["default"])('https://api.intercom.io').replyContentLength().get('/admins').replyWithError(socketErr);
      var client = new _lib.Client('foo', 'bar').usePromises();
      return client.admins.list().then(function (r) {
        _assert["default"].strictEqual(r, null, 'Valid response');
      })["catch"](function (err) {
        _assert["default"].deepStrictEqual(err, socketErr);
      });
    });
    it('should fail with unauthorized (401) error', function () {
      (0, _nock["default"])('https://api.intercom.io').replyContentLength().get('/admins').reply(401, {
        type: 'error.list',
        request_id: 'b2i3ri5909msvfqskol0',
        errors: [{
          code: 'token_unauthorized',
          message: 'Not authorized to access resource'
        }]
      }, {
        'X-Intercom-Version': '3736ab533ad11d88d93cdef3fcef9a98a5724229',
        'X-RateLimit-Limit': '83',
        'X-RateLimit-Remaining': '27',
        'X-RateLimit-Reset': '1522850540',
        'X-Request-Id': 'b2i3ri5909msvfqskol0',
        'X-Runtime': '0.037708'
      });
      var client = new _lib.Client('foo', 'bar').usePromises();
      return client.admins.list().then(function (r) {
        _assert["default"].strictEqual(r, null, 'Valid response');
      })["catch"](function (err) {
        _assert["default"].strictEqual(err.statusCode, 401);

        _assert["default"].strictEqual(err.body.request_id, 'b2i3ri5909msvfqskol0');

        _assert["default"].deepStrictEqual(err.body.errors, [{
          code: 'token_unauthorized',
          message: 'Not authorized to access resource'
        }]);

        _assert["default"].deepStrictEqual(err.message, 'Not authorized to access resource');

        _assert["default"].strictEqual(err.headers['x-request-id'], 'b2i3ri5909msvfqskol0');
      });
    });
    it('should fail with too many requests (429) error', function () {
      (0, _nock["default"])('https://api.intercom.io').replyContentLength().get('/me').reply(429, {
        type: 'error.list',
        request_id: 'b2i3mhcboc6pcbe33q80',
        errors: [{
          code: 'rate_limit_exceeded',
          message: 'Exceeded rate limit of 83 in 10_seconds'
        }]
      }, {
        'X-Intercom-Version': '3736ab533ad11d88d93cdef3fcef9a98a5724229',
        'X-RateLimit-Limit': '83',
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': '1522849880',
        'X-Request-Id': 'b2i3mhcboc6pcbe33q80',
        'X-Runtime': '0.037708'
      });
      var client = new _lib.Client('foo', 'bar').usePromises();
      return client.admins.me().then(function (r) {
        _assert["default"].strictEqual(r, null, 'Valid response');
      })["catch"](function (err) {
        _assert["default"].strictEqual(err.statusCode, 429);

        _assert["default"].strictEqual(err.body.request_id, 'b2i3mhcboc6pcbe33q80');

        _assert["default"].deepStrictEqual(err.body.errors, [{
          code: 'rate_limit_exceeded',
          message: 'Exceeded rate limit of 83 in 10_seconds'
        }]);

        _assert["default"].deepStrictEqual(err.message, 'Exceeded rate limit of 83 in 10_seconds');

        _assert["default"].strictEqual(err.headers['x-request-id'], 'b2i3mhcboc6pcbe33q80');

        _assert["default"].strictEqual(err.headers['x-ratelimit-reset'], '1522849880');
      });
    });
  });
  describe('with callback', function () {
    describe('with 1 arg', function () {
      it('should fail with ESOCKETTIMEDOUT error', function (done) {
        var socketErr = new Error('Socket timeout');
        socketErr.code = 'ESOCKETTIMEDOUT';
        (0, _nock["default"])('https://api.intercom.io').replyContentLength().get('/admins').replyWithError(socketErr);
        var client = new _lib.Client('foo', 'bar');
        client.admins.list(function (r) {
          _assert["default"].strictEqual(r, null, 'Valid response');

          done();
        });
      });
      it('should fail with unauthorized (401) error', function (done) {
        (0, _nock["default"])('https://api.intercom.io').replyContentLength().get('/admins').reply(401, {
          type: 'error.list',
          request_id: 'b2i3ri5909msvfqskol0',
          errors: [{
            code: 'token_unauthorized',
            message: 'Not authorized to access resource'
          }]
        }, {
          'X-Intercom-Version': '3736ab533ad11d88d93cdef3fcef9a98a5724229',
          'X-RateLimit-Limit': '83',
          'X-RateLimit-Remaining': '27',
          'X-RateLimit-Reset': '1522850540',
          'X-Request-Id': 'b2i3ri5909msvfqskol0',
          'X-Runtime': '0.037708'
        });
        var client = new _lib.Client('foo', 'bar');
        client.admins.list(function (r) {
          _assert["default"].strictEqual(r.statusCode, 401);

          _assert["default"].strictEqual(r.body.type, 'error.list');

          _assert["default"].strictEqual(r.body.request_id, 'b2i3ri5909msvfqskol0');

          _assert["default"].ok(Array.isArray(r.body.errors));

          done();
        });
      });
      it('should fail with too many requests (429) error', function (done) {
        (0, _nock["default"])('https://api.intercom.io').replyContentLength().get('/me').reply(429, {
          type: 'error.list',
          request_id: 'b2i3mhcboc6pcbe33q80',
          errors: [{
            code: 'rate_limit_exceeded',
            message: 'Exceeded rate limit of 83 in 10_seconds'
          }]
        }, {
          'X-Intercom-Version': '3736ab533ad11d88d93cdef3fcef9a98a5724229',
          'X-RateLimit-Limit': '83',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': '1522849880',
          'X-Request-Id': 'b2i3mhcboc6pcbe33q80',
          'X-Runtime': '0.037708'
        });
        var client = new _lib.Client('foo', 'bar');
        client.admins.me(function (r) {
          _assert["default"].strictEqual(r.statusCode, 429);

          _assert["default"].strictEqual(r.body.type, 'error.list');

          _assert["default"].strictEqual(r.body.request_id, 'b2i3mhcboc6pcbe33q80');

          _assert["default"].ok(Array.isArray(r.body.errors));

          done();
        });
      });
    });
    describe('with 2 args', function () {
      it('should fail with ESOCKETTIMEDOUT error', function (done) {
        var socketErr = new Error('Socket timeout');
        socketErr.code = 'ESOCKETTIMEDOUT';
        (0, _nock["default"])('https://api.intercom.io').replyContentLength().get('/admins').replyWithError(socketErr);
        var client = new _lib.Client('foo', 'bar');
        client.admins.list(function (err, r) {
          _assert["default"].strictEqual(r, null, 'Valid response');

          _assert["default"].deepStrictEqual(err, socketErr);

          done();
        });
      });
      it('should fail with unauthorized (401) error', function (done) {
        (0, _nock["default"])('https://api.intercom.io').replyContentLength().get('/admins').reply(401, {
          type: 'error.list',
          request_id: 'b2i3ri5909msvfqskol0',
          errors: [{
            code: 'token_unauthorized',
            message: 'Not authorized to access resource'
          }]
        }, {
          'X-Intercom-Version': '3736ab533ad11d88d93cdef3fcef9a98a5724229',
          'X-RateLimit-Limit': '83',
          'X-RateLimit-Remaining': '27',
          'X-RateLimit-Reset': '1522850540',
          'X-Request-Id': 'b2i3ri5909msvfqskol0',
          'X-Runtime': '0.037708'
        });
        var client = new _lib.Client('foo', 'bar');
        client.admins.list(function (err, r) {
          _assert["default"].strictEqual(r, null, 'Valid response');

          _assert["default"].strictEqual(err.statusCode, 401);

          _assert["default"].strictEqual(err.body.request_id, 'b2i3ri5909msvfqskol0');

          _assert["default"].deepStrictEqual(err.body.errors, [{
            code: 'token_unauthorized',
            message: 'Not authorized to access resource'
          }]);

          _assert["default"].deepStrictEqual(err.message, 'Not authorized to access resource');

          _assert["default"].strictEqual(err.headers['x-request-id'], 'b2i3ri5909msvfqskol0');

          done();
        });
      });
      it('should fail with too many requests (429) error', function (done) {
        (0, _nock["default"])('https://api.intercom.io').replyContentLength().get('/me').reply(429, {
          type: 'error.list',
          request_id: 'b2i3mhcboc6pcbe33q80',
          errors: [{
            code: 'rate_limit_exceeded',
            message: 'Exceeded rate limit of 83 in 10_seconds'
          }]
        }, {
          'X-Intercom-Version': '3736ab533ad11d88d93cdef3fcef9a98a5724229',
          'X-RateLimit-Limit': '83',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': '1522849880',
          'X-Request-Id': 'b2i3mhcboc6pcbe33q80',
          'X-Runtime': '0.037708'
        });
        var client = new _lib.Client('foo', 'bar');
        client.admins.me(function (err, r) {
          _assert["default"].strictEqual(r, null, 'Valid response');

          _assert["default"].strictEqual(err.statusCode, 429);

          _assert["default"].strictEqual(err.body.request_id, 'b2i3mhcboc6pcbe33q80');

          _assert["default"].deepStrictEqual(err.body.errors, [{
            code: 'rate_limit_exceeded',
            message: 'Exceeded rate limit of 83 in 10_seconds'
          }]);

          _assert["default"].deepStrictEqual(err.message, 'Exceeded rate limit of 83 in 10_seconds');

          _assert["default"].strictEqual(err.headers['x-request-id'], 'b2i3mhcboc6pcbe33q80');

          _assert["default"].strictEqual(err.headers['x-ratelimit-reset'], '1522849880');

          done();
        });
      });
    });
  });
});