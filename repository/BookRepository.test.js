const BookRepository = require("./BookRepository");
const DB = require("../database/connect");

beforeAll(async () => {
  await DB.connectDatabase();
});

afterAll(async () => {
  await DB.disconnectDatabase();
});

const mockBook = {
  title: "tamphuc",
  price: 6000,
};

describe("Sunny case: Book testing", () => {
  it("getAllBooks work OK", async () => {
    const books = await BookRepository.findAllBooks();
    console.log(
      "🚀 ~ file: BookRepository.test.js ~ line 15 ~ it ~ books",
      books
    );
    expect(books).toBeTruthy();
    expect(typeof books).toBe("object");
    expect(books.length).toBeGreaterThan(0);
  });

  it("findBookById work OK", async () => {
    const book = await BookRepository.findBookById("62a34e137b7d95a7a6ac8da7");
    console.log(
      "🚀 ~ file: BookRepository.test.js ~ line 21 ~ it ~ book",
      book
    );

    expect(book).toBeTruthy();
    expect(typeof book).toBe("object");
    expect(book.title).toBe(mockBook.title);
  });

  it("create book OK", async () => {
    const book = await BookRepository.createBook(mockBook);
    console.log(
      "🚀 ~ file: BookRepository.test.js ~ line 44 ~ it ~ book",
      book
    );
    expect(book).toBeTruthy();
    expect(book.title).toBe(mockBook.title);
  });
});

describe("Rainny case: Book testing", () => {});