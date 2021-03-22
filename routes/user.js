const express = require('express');
const router = express.Router();

const User = require('../models/User');

// handle errors
const handleError = (err) => {
  console.error(err.message, err.code);
  let errors = { email: '', password: '' };

  // duplicate error code
  if (err.code === 11000) {
    errors.email = 'This email is already in use';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    })
  }

  return errors;
}

// GET all users
router.get('/', function (req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

// GET single user by its ID
router.get('/:id', function (req, res, next) {
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

// Create new user
router.post('/', async function (req, res, next) {
  const { firstName, lastName, address, email, password, role } = req.body;
  try {
    const createdUser = await User.create({ firstName, lastName, address, email, password, role });
    res.status(200).json('User has been created successfully');
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
});

// UPDATE a book by its ID
router.put('/:id', function (req, res, next) {
  console.log(req.body);
  User.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
    if (err) return next(err);
    res.json(book);
  });
});

// DELETE a book by its ID
router.delete('/:id', function (req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, book) {
    if (err) return next(err);
    res.json(book);
  });
});

module.exports = router;