const Post = require('../models/Post');

class PostsService {
  static async getAllPosts() {
    return Post.find({});
  }

  static async getPostById(id) {
    return Post.findById(id)
  }

  static async createPost(postData) {
    return Post.create(postData);
  }

  static async updatePostById(id, postData) {
    return Post.findByIdAndUpdate(id, postData);
  }

  static async deletePostById(id) {
    return Post.findOneAndDelete(id);
  }
}

module.exports = PostsService;
