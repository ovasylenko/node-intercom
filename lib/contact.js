"use strict";
exports.__esModule = true;
var Contact = /** @class */ (function () {
    function Contact(client) {
        this.client = client;
    }
    Contact.prototype.create = function (params) {
        return this.client.post("/contacts", params);
    };
    Contact.prototype.update = function (params) {
        return this.client.put("/contacts/" + params.id, params);
    };
    Contact.prototype.list = function () {
        return this.client.get("/contacts", {});
    };
    Contact.prototype.listBy = function (params) {
        return this.client.get("/contacts", params);
    };
    Contact.prototype.find = function (params) {
        if (params.id) {
            return this.client.get("/contacts/" + params.id, {});
        }
        else if (params.user_id) {
            return this.client.get("/contacts", { user_id: params.user_id });
        }
    };
    Contact.prototype["delete"] = function (params) {
        return this.client["delete"]("/contacts/" + params.id, {});
    };
    Contact.prototype.convert = function (params) {
        return this.client.post("/contacts/convert", params);
    };
    return Contact;
}());
exports["default"] = Contact;
