const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// database config
const db = require("./config/keys").mongoURI;

//Connect to the mongodb
mongoose
  .connect(db)
  .then(connection => console.log("Connected to the database with success"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

//diff route paths
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 4522;

app.listen(port, () => console.log(`Server running on port : ${port}`));

