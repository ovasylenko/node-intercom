import { ITranslatedContent } from './ITranslatedContent';

export interface ICollection {
  type: String;
  id: String;
  workspace_id: String;
  name: String;
  description: String;
  created_at: Date;
  updated_at: Date;
  url: String;
  icon: String;
  order: String;
  default_locale: String;
  translated_content: ITranslatedContent;
}
