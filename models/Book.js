const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Create Book Schema & Model
const BookSchema = new Schema({
    isbn: {
        type: String,
        required: [true, 'Isbn field is required']
    },
    title: {
        type: String,
        required: [true, 'Name field is required']
    },
    author: {
        type: String,
        required: [true, 'Author field is required']
    },
    description: {
        type: String,
        required: [true, 'Description field is required']
    },
    price: {
        type: Number,
        required: [true, 'Price field is required']
    },
    published_Year: {
        type: String,
        required: [true, 'PublishedYear field is required']
    },
    productImage: {
        type: String,
        required: [true, 'Image is required']
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;