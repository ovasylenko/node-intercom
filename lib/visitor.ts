import { IClient } from "./client";
import { IVisitor } from "./interfaces/IVisitor";

interface IVisitorService {}

export default class Visitor implements IVisitorService {
  private client: IClient;
  constructor(client) {
    this.client = client;
  }
  update(params, f) {
    return this.client.post("/visitors", params);
  }
  find(id) {
    return this.client.get(`/visitors/${id}`);
  }
  delete(params) {
    return this.client.delete(`/visitors/${params.id}`);
  }
  convert(params) {
    return this.client.post("/visitors/convert", params);
  }
}
