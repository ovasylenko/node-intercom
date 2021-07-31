"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const contact_1 = __importDefault(require("./contact"));
var AUTH_TYPE;
(function (AUTH_TYPE) {
    AUTH_TYPE["LOGIN_PASS"] = "LOGIN_PASS";
    AUTH_TYPE["TOKEN"] = "TOKEN";
    AUTH_TYPE["API_KEY"] = "API_KEY";
    AUTH_TYPE["UNKNOWN"] = "UNKNOWN";
})(AUTH_TYPE || (AUTH_TYPE = {}));
const INTERCOM_VERSION = 2.3;
const BASE_URL = "https://api.intercom.io";
class Client {
    constructor({ username, password, token, appId, appApiKey, }) {
        this.username = "";
        this.password = "";
        this.token = "";
        this.appId = "";
        this.appApiKey = "";
        this.authType = AUTH_TYPE.UNKNOWN;
        this.requestOpts = {};
        this.contacts = null;
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
                "Intercom-Version": INTERCOM_VERSION,
            },
        };
        this.contacts = new contact_1.default(this);
        // this.events = new Event(this);
        // this.companies = new Company(this);
        // this.contacts = new Contact(this);
        // this.leads = new Contact(this);
        // this.visitors = new Visitor(this);
        // this.counts = new Counts(this);
        // this.admins = new Admin(this);
        // this.tags = new Tag(this);
        // this.segments = new Segment(this);
        // this.messages = new Message(this);
        // this.conversations = new Conversation(this);
        // this.notes = new Note(this);
        // this.customers = new Customer(this);
        // this.promises = false;
    }
    useRequestOpts(opts) {
        this.requestOpts = Object.assign(Object.assign({}, this.requestOpts), opts);
    }
    ping(f) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                url: "/admins",
            });
            return response.status;
        });
    }
    put(endpoint, data = {}) {
        return this.request({
            method: "put",
            url: endpoint,
            data,
        });
    }
    post(endpoint, data = {}) {
        return this.request({
            method: "post",
            url: endpoint,
            data,
        });
    }
    get(endpoint) {
        return this.request({
            method: "get",
            url: endpoint
        });
    }
    nextPage(paginationObject) {
        return this.request({
            method: "get",
            url: paginationObject.next,
            baseUrl: null,
        });
    }
    delete(endpoint, data = {}) {
        return this.request({
            method: "delete",
            url: endpoint,
            params: data,
        });
    }
    request(args) {
        const defaultArgs = {
            headers: {
                Accept: "application/json",
                "User-Agent": "intercom-node-client/2.0.0",
                Authorization: `Bearer ${this.token}`,
            },
        };
        // Don't just use Object.assign(requestArgs, args) here because we need to handle special cases like .headers
        // Per request args should take prededence over the default, and both of these over the user specified args via .useRequestOpts
        const requestArgs = lodash_merge_1.default({}, this.requestOpts, defaultArgs, args, {
            url: `${BASE_URL}${args.url}`,
        });
        console.log(requestArgs);
        return axios_1.default(requestArgs);
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map