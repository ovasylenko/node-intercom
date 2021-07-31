"use strict";
exports.__esModule = true;
var Visitor = /** @class */ (function () {
    function Visitor(client) {
        this.client = client;
    }
    Visitor.prototype.update = function (params, f) {
        return this.client.post("/visitors", params);
    };
    Visitor.prototype.find = function (id) {
        return this.client.get("/visitors/" + id);
    };
    Visitor.prototype["delete"] = function (params) {
        return this.client["delete"]("/visitors/" + params.id);
    };
    Visitor.prototype.convert = function (params) {
        return this.client.post("/visitors/convert", params);
    };
    return Visitor;
}());
exports["default"] = Visitor;
