import { ISegment } from './ISegment';
import { ISocialProfile } from './ISocialProfile';
import { ITag } from './ITag';
import { IAddressableObject } from './IAddressableObject';

export interface IVisitor {
  type: String;
  id: String;
  created_at: Date;
  updated_at: Date;
  user_id: String;
  name: String;
  custom_attributes: IAddressableObject;
  last_request_at: Date;
  avatar: IAddressableObject;
  unsubscribed_from_emails: Boolean;
  location_data: IAddressableObject;
  social_profiles: ISocialProfile[];
  segments: ISegment[];
  tags: ITag[];
}
