const Intercom = require("./dist/lib");

const client = new Intercom.Client({
  token: "dG9rOjc2Yjc1NmIyXzIyYjBfNDZiMF9iNjllX2UxMWNlMmFkMzdhNDoxOjA=",
});

// this version still supporting users API
client.useRequestOpts({
  headers: {
    "Intercom-Version": 2.3,
  },
});

client.contacts
  .search({ query: { field: "external_id", operator: "=", value: "1004257" } })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err.response.data);
  });

// client.contacts.update({
//   // user_id: "1004257",
//    email: "lxvslnk+b@gmail.com",
//   last_seen_ip: "::1",
//   last_seen_at: 1627251247246,
// },(result) => {
//   console.log(result.body)
// })

// const message = {
//   from: {
//     type: "user",
//     // id: 'client.body.id',
//     id: "5f508713ec91d62eaab1521a"
//   },
//   body: "Profile verification request"
// };

// client.messages.create(message, () => console.log("ok"));
