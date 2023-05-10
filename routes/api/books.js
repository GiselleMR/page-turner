const express = require('express');
const router = express.Router();
const { booksCtrl } = require('../../controllers');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/search', booksCtrl.googleSearchBooks);
router.post('/add',ensureLoggedIn, booksCtrl.addNewBook);
router.get('/', ensureLoggedIn, booksCtrl.getUserBooks);
router.delete('/remove/:id', ensureLoggedIn, booksCtrl.getUserBooks);

module.exports = router;