import { ITranslatedContent } from './ITranslatedContent';

export interface IArticle {
  type: String;
  id: String;
  workspace_id: String;
  title: String;
  description: String;
  body: String;
  author_id: String;
  state: String;
  created_at: Date;
  updated_at: Date;
  url: String;
  parent_id: String;
  parent_type: String;
  default_locale: String;
  translated_content: ITranslatedContent;
}
