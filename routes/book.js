const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, 'uploads');
  },
  filename: function (req, file, cb){
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter
});

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
router.post('/', upload.single('image'), (req, res, next) => {
  const title = req.body.title;
  const author = req.body.author;
  const published_Year = req.body.published_Year;
  const isbn = req.body.isbn;
  const price = req.body.price;
  const description = req.body.description;
  const bookImage = req.file;
  
  let image = bookImage.path;
  const book = new Book({
    isbn: isbn,
    title: title,
    author: author,
    description: description,
    price: price,
    published_Year: published_Year,
    bookImage: image,
  })
  book.save()
    .then(res => {
      console.log(book);
    })
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