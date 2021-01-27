const express = require('express');
const PostsService = require('../services/posts');

const router = express.Router();

router.get('/posts', async (req, res) => {
  const posts = await PostsService.getAllPosts();
  res.send(posts);
});

router.get('/posts/:id', async (req, res) => {
  const {id} = req.params;
  const post = await PostsService.getPostById(id);

  if (!post) {
    res.sendStatus(404);
    return;
  }

  res.send(post);
});

router.post('/posts', async (req, res) => {
  const postData = req.body;
  const createdPost = await PostsService.createPost(postData);
  res.status(201).send(createdPost);
});

router.put('/posts/:id', async (req, res) => {
  const {id} = req.params;
  const postData = req.body;
  const updatedPost = await PostsService.updatePostById(id, postData);

  if (!updatedPost) {
    res.sendStatus(404);
    return;
  }

  res.send(updatedPost);
});

router.delete('/posts/:id', async (req, res) => {
  const {id} = req.params;

  const deletedPost = await PostsService.deletePostById(id);

  if (!deletedPost) {
    res.sendStatus(404);
    return;
  }

  res.send(deletedPost);
});

module.exports = router;
