const axios = require("axios");
const User = require('../../models/user');
const Book = require('../../models/book');

const googleSearchBooks = async (req, res) => {
    console.log ('Google Search', req.body);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${req.body.searchTerm}&maxResults=20&key=${process.env.GOOGLE_API_KEY}`;
    const googleResponse = await axios.get(url);
    console.log('google results', googleResponse.data);
    res.json(googleResponse.data.items);
};

const addNewBook = async (req, res) => {
    const book = await Book.findOne({googleid: req.body.googleid});
    if (book) {
        if (book.users.includes(req.user._id)){
            book.users.remove(req.user._id)
            console.log("deletedBook", book);
        } else {
            book.users.push(req.user._id)
        }
        await book.save();
        res.json(book);
    } else {
        req.body.users = req.user._id;
        const addBook = await Book.create(req.body)
        await addBook.save();
        res.json(addBook);
    }
    console.log(req.body);
};


const getUserBooks = async (req, res) => {
    try {
        const books = await Book.find({users: req.user._id})
        res.json(books);
        console.log(books);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

};

module.exports = {googleSearchBooks, addNewBook, getUserBooks};