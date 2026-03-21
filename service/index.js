const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const authCookieName = "token";

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

// Makes Express automatically parse JSON
app.use(express.json());
app.use(cookieParser());

// Gives endpoints a path prefix of /api;
// Any other requests look in the public directory for static files
let apiRouter = express.Router();
app.use(`/api`, apiRouter);
app.use(express.static('public'));

// Placeholder endpoint that captures all requests
// app.get(/.*/, (_req, res) => {
//   res.send({ msg: 'Startup service' });
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
