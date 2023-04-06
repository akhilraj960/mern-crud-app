const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Book", BookSchema);
