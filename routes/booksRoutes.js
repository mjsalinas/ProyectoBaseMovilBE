const express= require('express');
const { getAllBooks, createBook } = require('../controllers/booksController');
const router= express.Router();

router.get('/books', getAllBooks);
router.post('/book', createBook);

module.exports = router;
