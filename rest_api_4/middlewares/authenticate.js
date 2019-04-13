const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    try {
        let token = req.headers.authorization.split(' ')[1]
        console.log(`From authenticate(token): ${token}`)
        let decoded = jwt.verify(token, "SECRET")
        console.log(`From authenticate(decoded): ${decoded}`)
        req.user = decoded
        next()
    } catch (err) {
        console.log(err)
        res.json({
            message: "Authorization Failed ....."
        })
    }
}

module.exports = authenticate







// Forum
// User Registration Login System
// Question
// Multiple Answer
// Upvote Downvote
// Category
// Search With Terms And Category
// Pagination