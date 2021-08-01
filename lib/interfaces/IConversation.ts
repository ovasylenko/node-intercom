import { ITag } from './ITag';
import { IContactConversation } from './IContactConversation';
import { IAddressableObject } from './IAddressableObject';
import { ITeammate } from './ITeammate';
import { IFirstContactReply } from './IFirstContactReply';
import { ISLA } from './ISLA';
import { ISource } from './ISource';
import { IConversationRating } from './IConversationRating';
import { IStatistics } from './IStatistics';
import { IConversationPart } from './IConversationPart';

export interface IConversation {
  type: String;
  id: String;
  created_at: Date;
  updated_at: Date;
  source: ISource;
  contacts: IContactConversation[];
  teammates: ITeammate[];
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
  first_contact_reply: IFirstContactReply;
  priority: String;
  sla_applied: ISLA;
  conversation_rating: IConversationRating;
  statistics: IStatistics;
  conversation_parts: IConversationPart[];
}
