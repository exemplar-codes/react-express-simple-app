const express = require("express");

const app = express();

const port = process.env.PORT || 80; // Heroku, or local or production

const path = require("path");

let visitsInSession = 0;

app.get("/", (req, res) => {
  console.log(`Visits this session: ${++visitsInSession}`);
  res.sendFile(path.resolve("build/index.html"));
});

app.get("/static/:folder/:file", (req, res) => {
  res.sendFile(
    path.resolve(`build/static/${req.params.folder}/${req.params.file}`)
  );
}); // for JS, CSS and other React app assets

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
