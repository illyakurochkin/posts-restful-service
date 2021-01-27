const mongoose = require('../db');

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: Date,
});

module.exports = mongoose.model('Post', PostSchema);
