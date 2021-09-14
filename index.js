const express = require("express");
const app = express();
const monogoose = require("mongoose");
const {
  USERNAME,
  PASSWORD,
  CLUSTER_ADDRESS,
  DATABASE_NAME,
} = require("./database/dbconfig");

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

monogoose
  .connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER_ADDRESS}/${DATABASE_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log("Error is ", err);
  });

const PORT = 9000;

app.listen(PORT, (req, res) => {
  console.log("Server is up and running on  port", PORT);
});
