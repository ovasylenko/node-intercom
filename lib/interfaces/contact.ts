export interface IContact {
  type: string;
  id: string;
  workspace_id: string;
  external_id: string;
  role: string;
  email: string;
  phone: string;
  name: string;
  avatar: string;
  owner_id: number;
  social_profiles: [];
  has_hard_bounced: boolean;
  marked_email_as_spam: boolean;
  unsubscribed_from_emails: boolean;
  created_at: Date;
  updated_at: Date;
  signed_up_at: Date;
  last_seen_at: Date;
  last_replied_at: Date;
  last_contacted_at: Date;
  last_email_opened_at: Date;
  last_email_clicked_at: Date;
  language_override: string;
  browser: string;
  browser_version: string;
  browser_language: string;
  os: string;
  location: {};
  android_app_name: string;
  android_app_version: string;
  android_device: string;
  android_os_version: string;
  android_sdk_version: string;
  android_last_seen_at: Date;
  ios_app_name: string;
  ios_app_version: string;
  ios_device: string;
  ios_os_version: string;
  ios_sdk_version: string;
  ios_last_seen_at: Date;
  custom_attributes: {};
  tags: [];
  notes: [];
  companies: [];
}
