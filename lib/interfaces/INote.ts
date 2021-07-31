export interface INote {
  type: String;
  id: String;
  created_at: Date;
  user: Object;
  body: String;
  author: Object;
}
