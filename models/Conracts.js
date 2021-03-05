const mongoose = require('mongoose');

const ContactsSchema = mongoose.Schema({
    name: String,
    email: String,
    description: String
})