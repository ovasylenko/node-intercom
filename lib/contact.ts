import { IClient } from "./client";
import { IContact } from "./interfaces/IContact";

interface IContactConstructor {
  new(): IContactService
}
interface IContactService {

}
export default class Contact implements IContactService {
  private client: IClient;

  constructor(client) {
    this.client = client;
  }

 update(params) {
    return this.client.put(`/contacts/${params.id}`, params);
  }
  list(f) {
    return this.client.get('/contacts');
  }
  retrieve(id) {
    return this.client.get(`/contacts/${id}`);
  }
  delete(params) {
    return this.client.delete(`/contacts/${params.id}`);
  }
  archive(params) {
    return this.client.post(`/contacts/${params.id}/archive`);
  }
  unarchive(params) {
    return this.client.post(`/contacts/${params.id}/unarchive`, params);
  }
  merge(params) {
    return this.client.post('/contacts/merge', params);
  }
  search(params) {
    return this.client.post('/contacts/search', params);
  }
  listAttachedCompanies(params) {
    return this.client.get(`/contacts/${params.id}/companies`);
  }
  listAttachedTags(params) {
    return this.client.get(`/contacts/${params.id}/tags`);
  }
  listAttachedSegments(params) {
    return this.client.get(`/contacts/${params.id}/segments`);
  }
}