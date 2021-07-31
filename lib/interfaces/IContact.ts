import { IAddressableList } from './IAddressableList';
import { IAddressableObject } from './IAddressableObject';
import { ITag } from './ITag';
import { ILocation } from './ILocation';
import { ISocialProfile } from './ISocialProfile';

export interface IContact {
  type: String;
  id: String;
  workspace_id: String;
  external_id: String;
  role: String;
  email: String;
  phone: String;
  name: String;
  avatar: String;
  owner_id: Number;
  social_profiles: ISocialProfile[];
  has_hard_bounced: Boolean;
  marked_email_as_spam: Boolean;
  unsubscribed_from_emails: Boolean;
  created_at: Date;
  updated_at: Date;
  signed_up_at: Date;
  last_seen_at: Date;
  last_replied_at: Date;
  last_contacted_at: Date;
  last_email_opened_at: Date;
  last_email_clicked_at: Date;
  language_override: String;
  browser: String;
  browser_version: String;
  browser_language: String;
  os: String;
  location: ILocation;
  android_app_name: String;
  android_app_version: String;
  android_device: String;
  android_os_version: String;
  android_sdk_version: String;
  android_last_seen_at: Date;
  ios_app_name: String;
  ios_app_version: String;
  ios_device: String;
  ios_os_version: String;
  ios_sdk_version: String;
  ios_last_seen_at: Date;
  custom_attributes: IAddressableObject;
  tags: IAddressableList | ITag[];
  notes: IAddressableList;
  companies: IAddressableList;
}
