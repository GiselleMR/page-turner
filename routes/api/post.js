const express = require('express');
const router = express.Router();
const postCtrl = require('../../controllers/api/post');

// Route handler for creating a new post
router.post('/', postCtrl.create);
router.get('/', postCtrl.index);

module.exports = router;