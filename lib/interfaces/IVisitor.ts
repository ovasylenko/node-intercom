import { ISocialProfile } from './ISocialProfile';
import { ITag } from './ITag';

export interface IVisitor {
  type: String;
  id: String;
  created_at: Date;
  updated_at: Date;
  user_id: String;
  name: String;
  custom_attributes: Object;
  last_request_at: Date;
  avatar: Object;
  unsubscribed_from_emails: Boolean;
  location_data: Object;
  social_profiles: ISocialProfile;
  segments: Array;
  tags: ITag;
}
