const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

app.get('/users/:username', (req, res) => res.status(200).send(`Hello user ${req.params.username}!`));


if (module === require.main) {
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
  });
}
// Must export the Express instance to work correctly on Google App Engine 
module.exports = app;
