const express = require('express');
const router = express.Router();
const Book = require('../model/book')
const booksController = require('../controllers/books-controller')

router.get("/",booksController.getAllBooks);
router.post("/",booksController.addBook);
router.get("/:id",booksController.getById);
router.put("/:id",booksController.updateBook);
router.delete("/:id",booksController.deleteBooks);


module.exports = router;