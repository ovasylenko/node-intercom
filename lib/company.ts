import { IClient } from "./client";
import { ICompany } from "./interfaces/ICompany";

interface ICompanyService {

}

export default class Company implements ICompanyService{
  private client: IClient;
  constructor(client) {
    this.client = client;
  }
  create(data) {
    return this.client.post('/companies', data);
  }
  update(data) {
    return this.create(data);
  }
  list(f) {
    return this.client.get('/companies');
  }
  listBy(params) {
    return this.client.get('/companies', params);
  }
}
