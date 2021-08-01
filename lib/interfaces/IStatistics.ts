import { IAdmin } from './IAdmin';

export interface IStatistics {
  time_to_assignment: Number;
  time_to_admin_reply: Number;
  time_to_first_close: Number;
  time_to_last_close: Number;
  median_time_to_reply: Number;
  first_contact_reply_at: Date;
  first_assignment_at: Date;
  first_admin_reply_at: Date;
  first_close_at: Date;
  last_assignment_at: Date;
  last_assignment_admin_reply_at: Date;
  last_contact_reply_at: Date;
  last_admin_reply_at: Date;
  last_close_at: Date;
  last_closed_by: IAdmin;
  count_reopens: Number;
  count_assignments: Number;
  count_conversations_parts: Number;

}
