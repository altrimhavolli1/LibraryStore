const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, '../uploads/');
  },
  filename: function (req, file, cb){
    cb(null, file.originalname);
  }
})
const upload = multer({ storage: storage });

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
router.post('/', upload.single('productImage'), (req, res, next) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    published_Year: req.body.published_Year,
    isbn: req.body.isbn,
    price: req.body.price,
    description: req.body.description,
    productImage: req.file.originalname
  });
  book.save()
    .then(res => {
      console.log(res);
      res.status(200).json(book);
    })
    // Book.create(req.body, function (err, book) {
    //   if (err) return next(err);
    //   res.json(book);
    // });
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