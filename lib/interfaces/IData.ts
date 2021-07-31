export interface IData {
  type: String;
  model: String;
  name: String;
  full_name: String;
  label: String;
  description: String;
  data_type: String;
  options: Array;
  api_writable: Boolean;
  ui_writable: Boolean;
  custom: Boolean;
  archived: Boolean;
  created_at: Date;
  updated_at: Date;
  admin_id: String;
}
