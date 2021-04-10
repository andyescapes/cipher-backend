const express = require("express");
const app = express();
var cors = require("cors");

const deciphers = require("./caesar.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send(`
  <h1> lololol <h1>

  `);
});

app.post("/caesar", (req, res) => {
  console.log(req.body);
  console.log("asdfasfasdfasdfasdfasfd");

  const result = deciphers.caesar(req.body.phrase);
  console.log(result);

  const deciphered = {
    result: result,
  };
  if (req.body.phrase) {
    res.send(JSON.stringify(deciphered));
  } else {
    res.status(400).send("Invalid input");
  }
});

app.listen(process.env.PORT);
