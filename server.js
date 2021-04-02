const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Set up express app
const app = express();

require('./mongoDB');

// Middleware
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('uploads'));
app.use(cookieParser());

// Route middlewares
const authRoute = require('./routes/auth');
app.use('/auth', authRoute);

const usersRoute = require('./routes/user');
app.use('/users', usersRoute);

const booksRoute = require('./routes/book');
app.use('/books', booksRoute);

const contactsRoute = require('./routes/contacts');
app.use('/contacts', contactsRoute);

// cookies
app.get('/set-cookies', (req, res) => {
    res.setHeader('Set-Cookie', 'newUser=true');
    res.send('you got the cookie!')
})

// Listen for requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));