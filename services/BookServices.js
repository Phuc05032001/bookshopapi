const BookRepository = require("../repository/BookRepository");

const getAllBooks = async () => {
  try {
    const books = await BookRepository.findAllBooks();
    return books;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookServices.js ~ line 25 ~ getAllBooks ~ error",
      error
    );
  }
};

const getBookById = async (id) => {
  try {
    const book = await BookRepository.findBookById(id);
    return book;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookServices.js ~ line 33 ~ getBookById ~ error",
      error
    );
  }
};

const deleteBookById = async (id) => {
  try {
    const book = await BookRepository.deleteBookById(id);
    return book;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookServices.js ~ line 33 ~ getBookById ~ error",
      error
    );
  }
};

const updateBookById = async (id, data) => {
  try {
    const book = await BookRepository.updateBookById(id , data);
    return book;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookServices.js ~ line 33 ~ updaetBookById ~ error",
      error
    );
  }
};

const createBook = async (data) => {
  try {
    const book = await BookRepository.createBook(data);
    return book;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookServices.js ~ line 32 ~ createBook ~ error",
      error
    );
  }
};

const deleteAllBook = async () => {
  try {
    const book = await BookRepository.deleteAllBook();
    return book;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookRepository.js ~ line 41 ~ deleteBook ~ error",
      error
    );
  }
};


module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  deleteAllBook,
  deleteBookById,
  updateBookById
};
