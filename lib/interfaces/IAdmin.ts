export interface IAdmin {
  type: String;
  id: String;
  name: String;
  email: String;
  job_title: String;
  away_mode_enabled: Boolean;
  away_mode_reassign: Boolean;
  has_inbox_seat: Boolean;
  team_ids: Number[];
  avatar: String;
}
