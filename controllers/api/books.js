const axios = require("axios");
const User = required('../../models/user');
const Book = require('../../models/book');

const googleSearchBooks = async (req, res) => {
    console.log ('Google Search', req.body);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${req.body.searchTerm}&maxResults=20&key=${process.env.GOOGLE_API_KEY}`;
    const googleResponse = await axios.get(url);
    console.log('google results', googleResponse.data);
    res.json(googleResponse.data.items);
};