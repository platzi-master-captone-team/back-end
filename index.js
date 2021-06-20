require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('./app/routes');

const { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ status: 'OK' });
});

app.use('/api', routes);

app.listen(PORT || 8000);

module.exports = app;
