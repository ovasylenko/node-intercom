import axios, { AxiosResponse } from 'axios'
import merge from 'lodash.merge'
import Contact from './contact';

import { IContact } from "./interfaces/IContact";

interface IClientConstructor {
  new (property: IClientArguments): IClient;
}

export interface IClient {
  contacts: IContact | null;
  useRequestOpts: (any) => void;
  requestOpts: {
    headers?: {
      [key: string]: string;
    };
  };
  get(endpoint: string, data?: any): Promise<AxiosResponse>;
  delete(endpoint: string, data?: any): Promise<AxiosResponse>;
  put(endpoint: string, data?: any): Promise<AxiosResponse>;
  post(endpoint: string, data?: any): Promise<AxiosResponse>;
}

interface IClientArguments {
  username?: string;
  password?: string;
  token?: string;
  appId?: string;
  appApiKey?: string;
}

enum AUTH_TYPE {
  LOGIN_PASS = "LOGIN_PASS",
  TOKEN="TOKEN",
  API_KEY="API_KEY",
  UNKNOWN="UNKNOWN",

}
const INTERCOM_VERSION = 2.3;
const BASE_URL = "https://api.intercom.io";

export default class Client implements IClient {
  private username = "";
  private password = "";
  private token = "";
  private appId = "";
  private appApiKey = "";
  private authType: AUTH_TYPE = AUTH_TYPE.UNKNOWN;

  requestOpts = {};
  contacts = null;
  constructor({
    username,
    password,
    token,
    appId,
    appApiKey,
  }) {
    if (username && password) this.authType = AUTH_TYPE.LOGIN_PASS;
    if (token) this.authType = AUTH_TYPE.TOKEN;
    if (appId && appApiKey) this.authType = AUTH_TYPE.API_KEY;

    if (this.authType === AUTH_TYPE.UNKNOWN) {
      throw new Error("Could not construct a client with those parameters");
    }

    this.token = token
    this.requestOpts = {
      headers: {
        "Intercom-Version": INTERCOM_VERSION,
      },
    };
    this.contacts = new Contact(this);
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
    this.requestOpts = { ...this.requestOpts, ...opts };
  }
  async ping(f) {
    const response = await this.request({
      url: "/admins",
    });
    return response.status;
  }
  put(endpoint, data ={}) {
    return this.request({
      method: "put",
      url: endpoint,
      data,
    });
  }
  post(endpoint, data={}) {
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
  delete(endpoint, data={}) {
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
    const requestArgs = merge({}, this.requestOpts, defaultArgs, args, {
      url: `${BASE_URL}${args.url}`,
    });
    console.log(requestArgs);
    return axios(requestArgs);
  }
}