
// Book Model

// likes (integer, minimum default is 0)
// coverImage (string, required and it can be 1 only)
// content ( string, required)
// timestamps (string, required)


const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    likes: { type: Number, required: true },
    converImage: { type: String, required: true },
    content: { type: String, required: true },
    piblicationId: { type: mongoose.Schema.Types.ObjectId, required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, required: true }
}, { versionKey: false, timestamps: true });

const Book = mongoose.Schema("book", bookSchema);

module.exports = Book;