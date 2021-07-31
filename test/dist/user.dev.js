"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('users', function () {
  it('should be created', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/users', {
      email: 'foo@bar.com'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.create({
      email: 'foo@bar.com'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should be updated', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/users', {
      email: 'foo@bar.com'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.update({
      email: 'foo@bar.com'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should list', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/users').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.list().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should list by params', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/users').query({
      tag_id: '1234'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.listBy({
      tag_id: '1234'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should find users by id', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/users/baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.find({
      id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should find users by user_id', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/users').query({
      user_id: 'foo'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.find({
      user_id: 'foo'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should find users by email', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/users').query({
      email: 'foo'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.find({
      email: 'foo'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should archive users by id', function (done) {
    (0, _nock["default"])('https://api.intercom.io')["delete"]('/users/baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.archive({
      id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should archive users by user_id', function (done) {
    (0, _nock["default"])('https://api.intercom.io')["delete"]('/users').query({
      user_id: 'foo'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.archive({
      user_id: 'foo'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should archive users by email', function (done) {
    (0, _nock["default"])('https://api.intercom.io')["delete"]('/users').query({
      email: 'foo'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.archive({
      email: 'foo'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should archive (using old delete function) users by id', function (done) {
    (0, _nock["default"])('https://api.intercom.io')["delete"]('/users/baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users["delete"]({
      id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should archive (using old delete function) users by user_id', function (done) {
    (0, _nock["default"])('https://api.intercom.io')["delete"]('/users').query({
      user_id: 'foo'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users["delete"]({
      user_id: 'foo'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should archive (using old delete function) users by email', function (done) {
    (0, _nock["default"])('https://api.intercom.io')["delete"]('/users').query({
      email: 'foo'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users["delete"]({
      email: 'foo'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should permanently delete users by intercom user ID', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/user_delete_requests', {
      intercom_user_id: 'foo'
    }).reply(200, {
      id: 10
    });
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.requestPermanentDeletion('foo').then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      _assert["default"].deepStrictEqual({
        id: 10
      }, r.body);

      done();
    });
  });
  it('should permanently delete users by Intercom user ID in params', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/user_delete_requests', {
      intercom_user_id: 'foo'
    }).reply(200, {
      id: 10
    });
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.requestPermanentDeletionByParams({
      id: 'foo'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      _assert["default"].deepStrictEqual({
        id: 10
      }, r.body);

      done();
    });
  });
  it('should permanently delete users by user_id', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/users').query({
      user_id: 'foo'
    }).reply(200, {
      id: 10
    }).post('/user_delete_requests', {
      intercom_user_id: 10
    }).reply(200, {
      id: 10
    });
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.requestPermanentDeletionByParams({
      user_id: 'foo'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      _assert["default"].deepStrictEqual({
        id: 10
      }, r.body);

      done();
    });
  });
  it('should permanently delete users by email', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/users').query({
      email: 'foo'
    }).reply(200, {
      id: 10
    }).post('/user_delete_requests', {
      intercom_user_id: 10
    }).reply(200, {
      id: 10
    });
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.requestPermanentDeletionByParams({
      email: 'foo'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      _assert["default"].deepStrictEqual({
        id: 10
      }, r.body);

      done();
    });
  });
  it('should callback with errors if calls fail', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/users').query({
      email: 'foo'
    }).reply(200, {
      type: 'error.list'
    });
    var client = new _lib.Client('foo', 'bar');
    client.users.requestPermanentDeletionByParams({
      email: 'foo'
    }, function (err) {
      _assert["default"].equal(true, err instanceof Error);

      done();
    });
  });
  it('should reject promises if calls fail', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/users').query({
      email: 'foo'
    }).reply(200, {
      type: 'error.list'
    });
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.users.requestPermanentDeletionByParams({
      email: 'foo'
    })["catch"](function (err) {
      _assert["default"].equal(true, err instanceof Error);

      done();
    });
  });
});