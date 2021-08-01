export interface IConversationCount {
  type: String;
  conversation: {
    assigned: Number;
    closed: Number;
    open: Number;
    unassigned: Number;
  };
}
