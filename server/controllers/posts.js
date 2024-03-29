const Post = require('../models/post');

exports.load = async function (req, res, next, id) {
  try {
    req.post = await Post.findById(id);
    if (!req.post) return next(new Error('Post not found'));
  } catch (err) {
    return next(err);
  }
  next();
};

exports.list = async function (req, res) {
  //const posts = await Post.find();
  const category = req.params.category;
  const query = category ? {category} : {};
  const posts = await Post.find(query);
  res.json(posts);
};

exports.create = async function (req, res, next) {
  try {
    const { title, url, category } = req.body;
    const author = req.user.id;

    const post = await Post.create({ title, url, author, category });
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

exports.destroy = async function (req, res) {
  req.post.remove();
  res.status(204).end();
};