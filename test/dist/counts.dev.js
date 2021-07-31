"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('counts', function () {
  it('app counts', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/counts').reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.counts.appCounts().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('conversation app counts', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/counts').query({
      type: 'conversation'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.counts.conversationCounts().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('conversation admin counts', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/counts').query({
      type: 'conversation',
      count: 'admin'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.counts.conversationAdminCounts().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('user tag counts', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/counts').query({
      type: 'user',
      count: 'tag'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.counts.userTagCounts().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('user segment counts', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/counts').query({
      type: 'user',
      count: 'segment'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.counts.userSegmentCounts().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('company tag counts', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/counts').query({
      type: 'company',
      count: 'tag'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.counts.companyTagCounts().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('company segment counts', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/counts').query({
      type: 'company',
      count: 'segment'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.counts.companySegmentCounts().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
  it('company user counts', function (done) {
    (0, _nock["default"])('https://api.intercom.io').get('/counts').query({
      type: 'company',
      count: 'user'
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.counts.companyUserCounts().then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
});