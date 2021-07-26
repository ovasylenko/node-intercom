"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _scroll = _interopRequireDefault(require("./scroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Contact = /*#__PURE__*/function () {
  function Contact(client) {
    _classCallCheck(this, Contact);

    this.client = client;
    this.scroll = new _scroll["default"](this.client, 'contact');
  }

  _createClass(Contact, [{
    key: "create",
    value: function create() {
      var parameters_or_function = arguments[0];
      var params = {};
      var callback = parameters_or_function;

      if (typeof parameters_or_function !== 'function') {
        params = parameters_or_function;
        callback = arguments[1];
      }

      return this.client.post('/contacts', params, callback);
    }
  }, {
    key: "update",
    value: function update(params, f) {
      return this.client.put("/contacts/".concat(params.id), params, f);
    }
  }, {
    key: "list",
    value: function list(f) {
      return this.client.get('/contacts', {}, f);
    }
  }, {
    key: "find",
    value: function find(params, f) {
      if (params.id) {
        return this.client.get("/contacts/".concat(params.id), {}, f);
      } else if (params.user_id) {
        return this.client.get('/contacts', {
          user_id: params.user_id
        }, f);
      }
    }
  }, {
    key: "delete",
    value: function _delete(params, f) {
      return this.client["delete"]("/contacts/".concat(params.id), {}, f);
    }
  }, {
    key: "archive",
    value: function archive(params, f) {
      return this.client.post("/contacts/".concat(params.id, "/archive"), {}, f);
    }
  }, {
    key: "unarchive",
    value: function unarchive(params, f) {
      return this.client.post("/contacts/".concat(params.id, "/unarchive"), params, f);
    }
  }, {
    key: "merge",
    value: function merge(params, f) {
      return this.client.post('/contacts/merge', params, f);
    }
  }, {
    key: "search",
    value: function search(params, f) {
      return this.client.post('/contacts/search', params, f);
    }
  }, {
    key: "listAttachedCompanies",
    value: function listAttachedCompanies(params, f) {
      return this.client.get("/contacts/".concat(params.id, "/companies"), {}, f);
    }
  }, {
    key: "listAttachedTags",
    value: function listAttachedTags(params, f) {
      return this.client.get("/contacts/".concat(params.id, "/tags"), {}, f);
    }
  }, {
    key: "listAttachedSegments",
    value: function listAttachedSegments(params, f) {
      return this.client.get("/contacts/".concat(params.id, "/segments"), {}, f);
    }
  }]);

  return Contact;
}();

exports["default"] = Contact;