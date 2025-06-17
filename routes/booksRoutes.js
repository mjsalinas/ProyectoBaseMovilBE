const express= require('express');
const { getAllBooks, createBook, updateBook,deleteBook } = require('../controllers/booksController');
const router= express.Router();

router.get('/books', getAllBooks);
router.post('/book', createBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
