import { ISocialProfile } from './ISocialProfile';

export interface IVisitor {
  type: string;
  id: string;
  created_at: Date;
  updated_at: Date;
  user_id: string;
  name: string;
  custom_attributes: Object;
  last_request_at: Date;
  avatar: Object;
  unsubscribed_from_emails: boolean;
  location_data: Object;
  social_profiles: ISocialProfile;
  segments: Array;
  tags: Array;
}
