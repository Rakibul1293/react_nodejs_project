const route = require("express").Router()
const { postComment } = require("../controllers/commentController")

// Create a Comment
// route.post('/', postComment)
route.post('/:postId/comments', postComment)

// Edit a Comment
route.patch('/:id', (req, res, next) => {

})

// Delete a Comment
route.delete('/:id', (req, res, next) => {

})

// Get All Comments
route.get('/', (req, res, next) => {

})

module.exports = route



// Create a Comment
// Edit a Comment
// Delete a Comment
// Get All Comments