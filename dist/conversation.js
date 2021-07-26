"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Conversation = /*#__PURE__*/function () {
  function Conversation(client) {
    _classCallCheck(this, Conversation);

    this.client = client;
  }

  _createClass(Conversation, [{
    key: "list",
    value: function list(data, f) {
      return this.client.get('/conversations', data, f);
    }
  }, {
    key: "find",
    value: function find(params, f) {
      return this.client.get("/conversations/".concat(params.id), params, f);
    }
  }, {
    key: "reply",
    value: function reply(params, f) {
      return this.client.post("/conversations/".concat(params.id, "/reply"), params, f);
    }
  }, {
    key: "markAsRead",
    value: function markAsRead(params, f) {
      return this.client.put("/conversations/".concat(params.id), {
        read: true
      }, f);
    }
  }]);

  return Conversation;
}();

exports["default"] = Conversation;