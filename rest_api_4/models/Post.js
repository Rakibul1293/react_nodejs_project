gconst mongoose = require("mongoose")
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    body: {
        type: String,
        required: true,
        maxlength: 5000
    },
    author: {
        type: Schema.Types.ObjectId,
        // type: String,
        ref: "User",
        required: true
    },
    category: {
        type: String,
        default: "General"
    },
    tag: [String],
    vote: {
        type: Number,
        default: 0
    },
    imageUrl: String,
    slug: {
        type: String,
        required: true,
        trim: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
}, { timestamps: true })

PostSchema.indexes({ title: "text", body: "text", tag: "text" })


const Post = mongoose.model("Post", PostSchema)
// if (Post) {
//     console.log(Post.schema.obj);
//     console.log("Schema Created .....");
// }
module.exports = Post



// title -> String -> required
// body -> String -> required
// author -> String -> required
// category -> String
// Tag -> []
// vote -> Number
// Comments -> [
    // User -> String
    // Body -> String
    // Timestamps -> Date
// ]
// imageUrl -> String
// Timestamp -> Date



// Comment -> Post -> CommentsArray