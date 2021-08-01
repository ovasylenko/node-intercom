export interface IAdminConversationsCount {
  type: String;
  conversation: {
    admin: {
      open: Number;
      closed: Number;
      id: String;
      name: String;
    };
  };
}
