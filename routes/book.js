const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');
const Book = require('../models/Books');

router.get('/', bookController.findAll);         // Get a list of books
router.get('/:id', bookController.findOne);      // Get a single book by its ID
router.post('/', bookController.create);         // Add a new book to the DB
router.put('/:id', bookController.updateOne);    // Update a book by its ID
router.delete('/:id', bookController.deleteOne); // Delete a book from a DB

module.exports = router;