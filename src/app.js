const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const posts = require('./routes/posts');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use(posts);

module.exports = app;

