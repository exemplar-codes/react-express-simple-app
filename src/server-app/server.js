const express = require("express");

const app = express();

const port = (process.env.PORT && 80) || 3000;

const path = require("path");

app.get("/", (req, res) => {
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
