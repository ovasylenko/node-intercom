import { ITag } from './ITag';
import { IContact } from './IContact';

export interface IConversation {
  type: String;
  id: String;
  created_at: Date;
  updated_at: Date;
  source: Object;
  contacts: IContact[];
  // teammates: Array;
  title: String;
  admin_assignee_id: Number;
  team_assignee_id: Number;
  custom_attributes: Object;
  open: Boolean;
  state: String;
  read: Boolean;
  waiting_since: Date;
  snoozed_until: Date;
  tags: ITag[];
  first_contact_reply: Object;
  priority: String;
  sla_applied: Object;
  conversation_rating: Object;
  statistics: Object;
  // conversation_parts: Array;
}
