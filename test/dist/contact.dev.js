"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('contacts', function () {
  it('keep the Contacts alias', function () {
    (0, _nock["default"])('https://api.intercom.io').post('/contacts').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();

    _assert["default"].deepEqual(client.leads, client.contacts);
  });
  it('should be created', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/contacts').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.leads.create().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should be created with parameters', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/contacts', {
      foo: 'bar'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.leads.create({
      foo: 'bar'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should be updated', function (done) {
    (0, _nock["default"])('https://api.intercom.io').put('/contacts/baz', {
      id: 'baz',
      email: 'foo@intercom.io'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.leads.update({
      id: 'baz',
      email: 'foo@intercom.io'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should list', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/contacts').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.leads.list().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should search by params', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/contacts/search').query({
      email: 'jayne@serenity.io'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.leads.search({
      email: 'jayne@serenity.io'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should find by id', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/contacts/baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.leads.find({
      id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should find by user_id', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/contacts?user_id=baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.leads.find({
      user_id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should list attached companies', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/contacts/baz/companies').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.leads.listAttachedCompanies({
      id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should list attached tags', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/contacts/baz/tags').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.leads.listAttachedTags({
      id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should list attached segments', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/contacts/baz/segments').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.leads.listAttachedSegments({
      id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('delete by id', function (done) {
    (0, _nock["default"])('https://api.intercom.io')["delete"]('/contacts/baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.leads["delete"]({
      id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
});