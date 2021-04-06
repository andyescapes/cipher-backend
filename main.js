const express = require("express");
const app = express();

const deciphers = require("./caesar.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
  res.send(JSON.stringify(deciphered));
});

app.listen(3001);
