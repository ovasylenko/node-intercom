"use strict";
exports.__esModule = true;
var Contact = /** @class */ (function () {
    function Contact(client) {
        this.client = client;
    }
    Contact.prototype.update = function (params) {
        return this.client.put("/contacts/" + params.id, params);
    };
    Contact.prototype.list = function (f) {
        return this.client.get('/contacts');
    };
    Contact.prototype.retrieve = function (id) {
        return this.client.get("/contacts/" + id);
    };
    Contact.prototype["delete"] = function (params) {
        return this.client["delete"]("/contacts/" + params.id);
    };
    Contact.prototype.archive = function (params) {
        return this.client.post("/contacts/" + params.id + "/archive");
    };
    Contact.prototype.unarchive = function (params) {
        return this.client.post("/contacts/" + params.id + "/unarchive", params);
    };
    Contact.prototype.merge = function (params) {
        return this.client.post('/contacts/merge', params);
    };
    Contact.prototype.search = function (params) {
        return this.client.post('/contacts/search', params);
    };
    Contact.prototype.listAttachedCompanies = function (params) {
        return this.client.get("/contacts/" + params.id + "/companies");
    };
    Contact.prototype.listAttachedTags = function (params) {
        return this.client.get("/contacts/" + params.id + "/tags");
    };
    Contact.prototype.listAttachedSegments = function (params) {
        return this.client.get("/contacts/" + params.id + "/segments");
    };
    return Contact;
}());
exports["default"] = Contact;
