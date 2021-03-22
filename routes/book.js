const express = require('express');
const router = express.Router();

const Book = require('../models/Book');

// GET all books
router.get('/', function(req, res, next) {
    Book.find(function (err, books) {
      if (err) return next(err);
      res.json(books);
    });
});
  
// GET single book by its ID
router.get('/:id', function(req, res, next) {
    Book.findById(req.params.id, function (err, book) {
      if (err) return next(err);
      res.json(book);
    });
});
  
// Create new book
router.post('/', function(req, res, next) {
    Book.create(req.body, function (err, book) {
      if (err) return next(err);
      res.json(book);
    });
});
  
// UPDATE a book by its ID
router.put('/:id', function(req, res, next) {
    console.log(req.body);
    Book.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
      if (err) return next(err);
      res.json(book);
    });
});
  
// DELETE a book by its ID
router.delete('/:id', function(req, res, next) {
    Book.findByIdAndRemove(req.params.id, req.body, function (err, book) {
      if (err) return next(err);
      res.json(book);
    });
});

module.exports = router;