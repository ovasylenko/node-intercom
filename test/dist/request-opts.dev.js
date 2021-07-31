"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

var _sinon = _interopRequireDefault(require("sinon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('request-opts', function () {
  it('should be able to change request options', function () {
    var jsonReviver = _sinon["default"].stub().returnsArg(1);

    (0, _nock["default"])('https://api.intercom.io').get('/admins/baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises().useRequestOpts({
      jsonReviver: jsonReviver
    });
    return client.admins.find('baz').then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      _sinon["default"].assert.called(jsonReviver);
    });
  });
  it('should be able to change request baseUrl option', function () {
    (0, _nock["default"])('http://local.test-server.com').get('/admins/baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises().useRequestOpts({
      baseUrl: 'http://local.test-server.com'
    });
    return client.admins.find('baz').then(function (r) {
      _assert["default"].equal(200, r.statusCode);
    });
  });
  it('should be able to change request options merging in headers', function () {
    var jsonReviver = _sinon["default"].stub().returnsArg(1);

    var customHeaderCheck = _sinon["default"].stub().returns(true);

    var userAgentHeaderCheck = _sinon["default"].stub().returns(true);

    var acceptHeaderCheck = _sinon["default"].stub().returns(true);

    (0, _nock["default"])('https://api.intercom.io', {
      reqheaders: {
        'x-intercom-header': customHeaderCheck,
        'User-Agent': userAgentHeaderCheck,
        Accept: acceptHeaderCheck
      }
    }).get('/admins/baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises().useRequestOpts({
      jsonReviver: jsonReviver,
      headers: {
        Accept: 'text/plain',
        'x-intercom-header': 'bar'
      }
    });
    return client.admins.find('baz').then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      _sinon["default"].assert.called(jsonReviver); // Should always have a user-agent


      _sinon["default"].assert.calledOnce(userAgentHeaderCheck);

      _sinon["default"].assert.calledWithMatch(userAgentHeaderCheck, _sinon["default"].match.string); // Shouldn't allow accept header to be overriden


      _sinon["default"].assert.calledOnce(acceptHeaderCheck);

      _sinon["default"].assert.calledWithExactly(acceptHeaderCheck, 'application/json'); // Should include custom header


      _sinon["default"].assert.calledOnce(customHeaderCheck);

      _sinon["default"].assert.calledWithExactly(customHeaderCheck, 'bar');
    });
  });
});
describe('base-url', function () {
  it('should be able to change base url (using old .useBaseUrl method)', function (done) {
    (0, _nock["default"])('http://local.test-server.com').get('/admins').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises().useBaseUrl('http://local.test-server.com');
    client.admins.list().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
});