const BookServices = require("../services/BookServices");

const getAllBooks = async (req, res, next) => {
  const books = await BookServices.getAllBooks();
  res.send(books);
};

const getBook = async (req, res, next) => {
  const id = req.params.id;

  const book = await BookServices.getBookById(id);

  if (!book) res.sendStatus(400);

  console.log("🚀 ~ file: book.js ~ line 16 ~ book", book);

  res.send(book);
};

const deleteBookById = async (req, res, next) => {
  const id = req.params.id;

  const book = await BookServices.deleteBookById(id);

  if (!book) res.sendStatus(400);

  console.log("🚀 ~ file: book.js ~ line 16 ~ book", book);

  res.send(book);
};


const deleteAllBook = async (req, res, next) => {
  try {
    // GET : req.params, req.query

    
    if (!req.body) return res.sendStatus(400);

    const book = await BookServices.deleteAllBook();

    if (!book) return res.sendStatus(500);

    return res.status(200).send(book);
  } catch (error) {
    console.log(
      "🚀 ~ file: bookController.js ~ line 34 ~ deleteBook ~ error",
      error
    );
    res.sendStatus(500);
  }
};

const updateBookById = async (req, res, next) => {
  const id = req.params.id;

  // GET : req.params, req.query
  if (!req.body) return res.sendStatus(400);

  const book = await BookServices.updateBookById(id, req.body);

  if (!book) res.sendStatus(400);

  console.log("🚀 ~ file: book.js ~ line 16 ~ book", book);

  res.send(book);
};

const createBook = async (req, res, next) => {
  try {
    // GET : req.params, req.query
    if (!req.body) return res.sendStatus(400);

    const book = await BookServices.createBook(req.body);

    if (!book) return res.sendStatus(500);

    return res.status(200).send(book);
  } catch (error) {
    console.log(
      "🚀 ~ file: bookController.js ~ line 32 ~ createBook ~ error",
      error
    );
    res.sendStatus(500);
  }
};



module.exports = {
  getAllBooks,
  getBook,
  createBook,
  deleteAllBook,
  deleteBookById,
  updateBookById
};
