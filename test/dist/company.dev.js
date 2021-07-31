"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('companies', function () {
  it('should be created', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/companies', {
      name: 'baz'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.companies.create({
      name: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should list', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/companies').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.companies.list().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should list by params', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/companies').query({
      tag_id: '1234'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.companies.listBy({
      tag_id: '1234'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should find companies by id', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/companies/baz').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.companies.find({
      id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should find companies by company_id', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/companies').query({
      company_id: 'baz'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.companies.find({
      company_id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should find companies by name', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/companies').query({
      name: 'baz'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.companies.find({
      name: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should list company users by id', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/companies/baz/users').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.companies.listUsers({
      id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should list company users by company_id', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/companies').query({
      company_id: 'baz',
      type: 'user'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.companies.listUsers({
      company_id: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('should list company users by company name', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/companies').query({
      name: 'baz',
      type: 'user'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.companies.listUsers({
      name: 'baz'
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
});