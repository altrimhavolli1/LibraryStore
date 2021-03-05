const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Create Book Schema & Model
const BookSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    author: {
        type: String,
        required: [true, 'Author field is required']
    },
    price: {
        type: Number,
        required: [true, 'Price field is required']
    },
    // image: {
    //     type: String,
    //     required: [true, 'Image is required']
    // }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;