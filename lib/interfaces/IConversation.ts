import { ITag } from './ITag';
import { IContact } from './IContact';
import { IAddressableObject } from './IAddressableObject';

export interface IConversation {
  type: String;
  id: String;
  created_at: Date;
  updated_at: Date;
  source: IAddressableObject;
  contacts: IContact[];
  teammates: any[];
  title: String;
  admin_assignee_id: Number;
  team_assignee_id: Number;
  custom_attributes: IAddressableObject;
  open: Boolean;
  state: String;
  read: Boolean;
  waiting_since: Date;
  snoozed_until: Date;
  tags: ITag[];
  first_contact_reply: IAddressableObject;
  priority: String;
  sla_applied: IAddressableObject;
  conversation_rating: IAddressableObject;
  statistics: IAddressableObject;
  conversation_parts: any[];
}
