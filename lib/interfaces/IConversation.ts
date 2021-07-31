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
<<<<<<< HEAD
  teammates: any[];
=======
  // teammates: Array;
>>>>>>> cde96031e420ee61beeda9c861c3cb449fc787b8
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
<<<<<<< HEAD
  sla_applied: IAddressableObject;
  conversation_rating: IAddressableObject;
  statistics: IAddressableObject;
  conversation_parts: any[];
=======
  sla_applied: Object;
  conversation_rating: Object;
  statistics: Object;
  // conversation_parts: Array;
>>>>>>> cde96031e420ee61beeda9c861c3cb449fc787b8
}
