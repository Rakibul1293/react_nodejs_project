const Comment = require("../models/Comment")
const Post = require("../models/Post")

const postComment = (req, res, next) => {
    // console.log(req.params)

    let { postId } = req.params

    let comment = new Comment({
        userId: req.body.userId,
        username: req.body.username,
        postId,
        body: req.body.body
    })

    comment.save()
        .then(data => {
            console.log("Data is:" + data)
            Post.findById(postId)
                .then(post => {
                    // let comments = post.comments
                    // comments.push(data._id)
                    // Post.findOneAndUpdate({ _id: postId }, { $set: comments })
                    // .then(data2 => {
                    //     res.json({
                    //         message: "Comment Added ....."
                    //     })
                    // })
                    console.log("Post is:" + post)
                    post.comments.push(data._id)
                    Post.findOneAndUpdate({ _id: postId }, { $set: post })
                        // .then(data2 => data2.findById(postId))
                        .then(data2 => {
                            console.log("Data2 is:" + data2)
                            res.json({
                                message: "Comment Added ....."
                            })
                        })
                })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "Server Error .....",
                error
            })
        })
}

module.exports = {
    postComment
}