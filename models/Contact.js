const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Create Contact Schema & Model
const ContactSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Full Name field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    subject: {
        type: String,
        required: [true, 'subject field is required']
    },
    message: {
        type: String,
        required: [true, 'Message field is required']
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;