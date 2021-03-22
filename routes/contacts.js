const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact');

// GET all books
router.get('/', function(req, res, next) {
    Contact.find(function (err, contacts) {
      if (err) return next(err);
      res.json(contacts);
    });
});
  
// GET single contact by its ID
router.get('/:id', function(req, res, next) {
    Contact.findById(req.params.id, function (err, contact) {
      if (err) return next(err);
      res.json(contact);
    });
});

// Create new book
router.post('/', function(req, res, next) {
    Contact.create(req.body, function (err, contact) {
      if (err) return next(err);
      res.json(contact);
    });
});
  
// DELETE a contact by its ID
router.delete('/:id', function(req, res, next) {
    Contact.findByIdAndRemove(req.params.id, req.body, function (err, contact) {
      if (err) return next(err);
      res.json(contact);
    });
});

module.exports = router;