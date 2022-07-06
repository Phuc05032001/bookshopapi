const BookModel = require("../database/models/Book");

const findAllBooks = async () => {
  try {
    const books = await BookModel.find({});
    return books;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookRepository.js ~ line 25 ~ findAll ~ error",
      error
    );
  }
};

const findBookById = async (id) => {
  try {
    const book = await BookModel.findById(id);

    return book;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookRepository.js ~ line 17 ~  ~ error",
      error
    );
  }
};



const deleteBookById = async (id) => {
  try {
    const book = await BookModel.findByIdAndDelete(id);
    return book;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookRepository.js ~ line 30 ~ deleteBookById ~ error",
      error
    );
  }
};

const createBook = async (data) => {
  try {
    const book = await BookModel.create(data);
    return book;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookRepository.js ~ line 31 ~ createBook ~ error",
      error
    );
  }
};

const updateBookById = async (id, data) => {
  try {
    const book = await BookModel.findByIdAndUpdate(id, data);
    return book;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookRepository.js ~ line 30 ~ updateBookById ~ error",
      error
    );
  }
};

const deleteAllBook = async () => {
  try {
    const book = await BookModel.deleteMany();
    return book;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookRepository.js ~ line 33 ~ deleteBook ~ error",
      error
    );
  }
};

module.exports = {
  findAllBooks,
  findBookById,
  createBook,
  deleteAllBook,
  deleteBookById,
  updateBookById
};
