const userRoutes = require('./api/users');
const booksRoutes = require('./api/books');
const express = require('express');
const router = express.Router();
const postsRoutes = require('./api/post')

router.use('/users', userRoutes);
router.use('/books', booksRoutes);
router.use('/posts', postsRoutes);

module.exports = router;