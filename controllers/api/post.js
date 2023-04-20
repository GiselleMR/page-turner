const Post = require('../../models/post');

module.exports = {
  create,
  index,
}

async function index(req, res) {
  const posts = await Post.find().sort({createdAt: -1}).exec();
  res.json(posts)
}

async function create(req,res) {
  req.body.user = req.user._id
  try {
    const response = await Post.create(req.body)
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}