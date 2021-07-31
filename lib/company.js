"use strict";
exports.__esModule = true;
var Company = /** @class */ (function () {
    function Company(client) {
        this.client = client;
    }
    Company.prototype.create = function (data) {
        return this.client.post('/companies', data);
    };
    Company.prototype.update = function (data) {
        return this.create(data);
    };
    Company.prototype.list = function (f) {
        return this.client.get('/companies');
    };
    Company.prototype.listBy = function (params) {
        return this.client.get('/companies', params);
    };
    return Company;
}());
exports["default"] = Company;
