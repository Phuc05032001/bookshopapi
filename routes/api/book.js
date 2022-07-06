var express = require("express");
var router = express.Router();
const BookController = require("../../controllers/bookController");
/**
 * @swagger
 * /api/books:
 *   get:
 *     tags:
 *       - Book
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                  title:
 *                    type: string
 *                  price:
 *                    type: number
 */

router.get("/books", BookController.getAllBooks);

/**
 * @swagger
 * /api/book/:id:
 *   get:
 *     tags:
 *       - Book
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                  title:
 *                    type: string
 *                  price:
 *                    type: number
 */

router.get("/book/:id", BookController.getBook);

router.post("/books", BookController.createBook);

router.delete("/deleteAllBook", BookController.deleteAllBook);

router.delete("/deleteBookById/:id", BookController.deleteBookById);

router.post("/updateBookById/:id", BookController.updateBookById);



module.exports = router;
