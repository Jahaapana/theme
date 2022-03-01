const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

global.USER_DATA = {
  user1: { id: "user1", name: "User One", theme: "red" },
  user2: { id: "user2", name: "User Two", theme: "green" },
  user3: { id: "user3", name: "User Three", theme: "yellow" },
};

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(bodyParser.json());

//GET api to return selected user
app.get("/user/:id", (request, response) => {
  const { id } = request.params;
  response.status(200).send(USER_DATA[id] ? USER_DATA[id] : {});
});

//PUT api to update given user
app.put("/user/:id", (request, response) => {
  const id = request.params.id;
  const { theme } = request.body;

  var tempUser = USER_DATA[id];
  var updatedUser = { ...tempUser, theme: theme };
  global.USER_DATA = { ...USER_DATA, [id]: updatedUser };
  response.status(200).json(USER_DATA[id]);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "...client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listining on ${PORT}`);
});
