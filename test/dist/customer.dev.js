"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _lib = require("../lib");

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('customers', function () {
  it('should search', function (done) {
    (0, _nock["default"])('https://api.intercom.io').post('/customers/search', {
      query: {
        field: 'name',
        operator: '=',
        name: 'Alice'
      },
      sort: {
        field: 'name',
        order: 'ascending'
      },
      pagination: {
        per_page: 10
      }
    }).reply(200, {});
    var client = new _lib.Client('foo', 'bar').usePromises();
    client.customers.search({
      query: {
        field: 'name',
        operator: '=',
        name: 'Alice'
      },
      sort: {
        field: 'name',
        order: 'ascending'
      },
      pagination: {
        per_page: 10
      }
    }).then(function (r) {
      _assert["default"].equal(200, r.statusCode);

      done();
    });
  });
});