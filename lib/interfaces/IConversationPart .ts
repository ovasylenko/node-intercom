export interface IConversation {
  type: String;
  id: String;
  part_type: String;
  body: String;
  created_at: Date;
  updated_at: Date;
  notified_at: Date;
  assigned_to: String;
  author: String;
  attachments: any[];
  redacted: Boolean;
}
