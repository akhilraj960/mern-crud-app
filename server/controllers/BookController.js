const Book = require("../models/BookModel");

const AddBook = (req, res) => {

  const { author, title, publicationDate, publisher, language } = req.body;

  const book = new Book({
    author: author,
    title: title,
    publicationDate: publicationDate,
    publisher: publisher,
    language: language,
  });

  book.save().then(() => {
    res.send("success");
  });
};

const OneBook = async (req, res) => {
  id = req.params.id;
  let book = await Book.findById({ _id: id });

  if (book) {
    res.send(book);
  }
};

const AllBooks = async (req, res) => {
  let book = await Book.find();
  if (book) {
    res.send(book);
  }
};

const UpdateBook = (req, res) => {
  id = req.params.id;

  const { author, title, publicationDate, publisher, language } = req.body;
  Book.findByIdAndUpdate(id, {
    author,
    title,
    publicationDate,
    publisher,
    language,
  }).then(()=>{
    res.send('updated Successfully')
  });
};

const DeleteBooks = (req, res) => {
  id = req.params.id;
  Book.findByIdAndRemove(id).then(() => {
    res.send("deleted successfully");
  });
};

module.exports = {
  AddBook: AddBook,
  DeleteBooks: DeleteBooks,
  AllBooks: AllBooks,
  OneBook: OneBook,
  UpdateBook:UpdateBook
};
