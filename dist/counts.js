"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Counts = /*#__PURE__*/function () {
  function Counts(client) {
    _classCallCheck(this, Counts);

    this.client = client;
  }

  _createClass(Counts, [{
    key: "appCounts",
    value: function appCounts(f) {
      return this.client.get('/counts', {}, f);
    }
  }, {
    key: "conversationCounts",
    value: function conversationCounts(f) {
      return this.client.get('/counts', {
        type: 'conversation'
      }, f);
    }
  }, {
    key: "conversationAdminCounts",
    value: function conversationAdminCounts(f) {
      return this.client.get('/counts', {
        type: 'conversation',
        count: 'admin'
      }, f);
    }
  }, {
    key: "userTagCounts",
    value: function userTagCounts(f) {
      return this.client.get('/counts', {
        type: 'user',
        count: 'tag'
      }, f);
    }
  }, {
    key: "userSegmentCounts",
    value: function userSegmentCounts(f) {
      return this.client.get('/counts', {
        type: 'user',
        count: 'segment'
      }, f);
    }
  }, {
    key: "companyTagCounts",
    value: function companyTagCounts(f) {
      return this.client.get('/counts', {
        type: 'company',
        count: 'tag'
      }, f);
    }
  }, {
    key: "companySegmentCounts",
    value: function companySegmentCounts(f) {
      return this.client.get('/counts', {
        type: 'company',
        count: 'segment'
      }, f);
    }
  }, {
    key: "companyUserCounts",
    value: function companyUserCounts(f) {
      return this.client.get('/counts', {
        type: 'company',
        count: 'user'
      }, f);
    }
  }]);

  return Counts;
}();

exports["default"] = Counts;