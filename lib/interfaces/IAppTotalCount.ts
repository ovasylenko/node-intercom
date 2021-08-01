export interface IAppTotalCount {
  type: String;
  company: {
    count: Number;
  };
  segments: {
    count: Number;
  };
  tag: {
    count: Number;
  };
  user: {
    count: Number;
  };
}
