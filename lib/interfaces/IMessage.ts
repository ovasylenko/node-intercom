export interface IMessage {
  type: String;
  id: String;
  created_at: Date;
  subject: String;
  body: String;
  message_type: String;
  conversation_id: String;
}
