const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        // type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    body: {
        type: String,
        required: true,
        maxlength: 1000,
        trim: true
    }
})

const Comment = mongoose.model("Comment", CommentSchema)
module.exports = Comment







// User Id
// User Name
// Post Id
// body