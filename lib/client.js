"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var lodash_merge_1 = require("lodash.merge");
var company_1 = require("./company");
var contact_1 = require("./contact");
var visitor_1 = require("./visitor");
var AUTH_TYPE;
(function (AUTH_TYPE) {
    AUTH_TYPE["LOGIN_PASS"] = "LOGIN_PASS";
    AUTH_TYPE["TOKEN"] = "TOKEN";
    AUTH_TYPE["API_KEY"] = "API_KEY";
    AUTH_TYPE["UNKNOWN"] = "UNKNOWN";
})(AUTH_TYPE || (AUTH_TYPE = {}));
var INTERCOM_VERSION = 2.3;
var BASE_URL = "https://api.intercom.io";
var Client = /** @class */ (function () {
    function Client(_a) {
        var username = _a.username, password = _a.password, token = _a.token, appId = _a.appId, appApiKey = _a.appApiKey;
        this.username = "";
        this.password = "";
        this.token = "";
        this.appId = "";
        this.appApiKey = "";
        this.authType = AUTH_TYPE.UNKNOWN;
        this.requestOpts = {};
        this.contacts = null;
        this.companies = null;
        this.visitors = null;
        if (username && password)
            this.authType = AUTH_TYPE.LOGIN_PASS;
        if (token)
            this.authType = AUTH_TYPE.TOKEN;
        if (appId && appApiKey)
            this.authType = AUTH_TYPE.API_KEY;
        if (this.authType === AUTH_TYPE.UNKNOWN) {
            throw new Error("Could not construct a client with those parameters");
        }
        this.token = token;
        this.requestOpts = {
            headers: {
                "Intercom-Version": INTERCOM_VERSION
            }
        };
        this.contacts = new contact_1["default"](this);
        this.companies = new company_1["default"](this);
        this.visitors = new visitor_1["default"](this);
        // this.events = new Event(this);
        // this.companies = new Company(this);
        // this.contacts = new Contact(this);
        // this.visitors = new Visitor(this);
        // this.counts = new Counts(this);
        // this.admins = new Admin(this);
        // this.tags = new Tag(this);
        // this.segments = new Segment(this);
        // this.messages = new Message(this);
        // this.conversations = new Conversation(this);
        // this.notes = new Note(this);
        // this.customers = new Customer(this);
    }
    Client.prototype.useRequestOpts = function (opts) {
        this.requestOpts = __assign(__assign({}, this.requestOpts), opts);
    };
    Client.prototype.ping = function (f) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request({
                            url: "/admins"
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.status];
                }
            });
        });
    };
    Client.prototype.put = function (endpoint, data) {
        if (data === void 0) { data = {}; }
        return this.request({
            method: "put",
            url: endpoint,
            data: data
        });
    };
    Client.prototype.post = function (endpoint, data) {
        if (data === void 0) { data = {}; }
        return this.request({
            method: "post",
            url: endpoint,
            data: data
        });
    };
    Client.prototype.get = function (endpoint) {
        return this.request({
            method: "get",
            url: endpoint
        });
    };
    Client.prototype.nextPage = function (paginationObject) {
        return this.request({
            method: "get",
            url: paginationObject.next,
            baseUrl: null
        });
    };
    Client.prototype["delete"] = function (endpoint, data) {
        if (data === void 0) { data = {}; }
        return this.request({
            method: "delete",
            url: endpoint,
            params: data
        });
    };
    Client.prototype.request = function (args) {
        var defaultArgs = {
            headers: {
                Accept: "application/json",
                "User-Agent": "intercom-node-client/2.0.0",
                Authorization: "Bearer " + this.token
            }
        };
        // Don't just use Object.assign(requestArgs, args) here because we need to handle special cases like .headers
        // Per request args should take prededence over the default, and both of these over the user specified args via .useRequestOpts
        var requestArgs = lodash_merge_1["default"]({}, this.requestOpts, defaultArgs, args, {
            url: "" + BASE_URL + args.url
        });
        console.log(requestArgs);
        return axios_1["default"](requestArgs);
    };
    return Client;
}());
exports["default"] = Client;
