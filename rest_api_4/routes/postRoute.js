const route = require("express").Router()
// const authenticate = require("../middlewares/authenticate")
const commentRouter = require('./commentRoutes')
const passport = require("passport")
const { createPost, getAllPosts, getSinglePost, upvote, downvote, updatePost, deletePost, search } = require("../controllers/postController")

// Get All Posts
// route.get('/', getAllPosts)
// route.get('/', authenticate, getAllPosts)
route.get('/', passport.authenticate("jwt", { session: false }), getAllPosts)

// Get Single Post By Id or Slag
route.get('/:id', getSinglePost)

// Post a New Post
route.post('/', createPost)

// Edit Post By Id or Slag
route.patch('/:id', updatePost)

// Delete Posts By Id or Slag
route.get('/:id', deletePost)

// Search Posts
route.post('/:terms', search)

// Add Upvote
route.get('/:id/upvote', upvote)

// Add Downvote
route.get('/:id/downvote', downvote)

route.use("/", commentRouter)

module.exports = route



// Get All Posts
// Get Single Post By Id or Slag
// Post a New Posts
// Edit Post By Id or Slag
// Delete Posts
// Search Posts
// Add Upvote
// Add Downvote
// Post Comments
// Edit Comments
// Delete Comments
// Get Comments