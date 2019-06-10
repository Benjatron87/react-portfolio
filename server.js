const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static('public'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});