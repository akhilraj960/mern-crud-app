const router = require("express").Router();

const UpdateBook = require("../controllers/BookController").UpdateBook;
const DeleteBooks = require("../controllers/BookController").DeleteBooks;
const AddBook = require("../controllers/BookController").AddBook;
const AllBooks = require("../controllers/BookController").AllBooks;
const OneBook = require("../controllers/BookController").OneBook;

router.post("/book", AddBook);

router.get("/books", AllBooks);

router.delete("/book/:id", DeleteBooks);

router.get("/book/:id", OneBook);

router.put("/book/:id", UpdateBook);

module.exports = router;
