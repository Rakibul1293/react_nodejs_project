const mongoose = require("mongoose")
const Post = require("../models/Post")

// Create Post Controller
const createPost = (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        category: req.body.category || "General",
        tag: req.body.tag || [],
        imageUrl: req.body.imageUrl || "",

        // slug: req.body.slug || (function(){
        //     return req.body.title.split(" ").join("_").toLowerCase()
        // })

        slug: req.body.slug || req.body.title.split(" ").join("_").toLowerCase()
    })

    post.save()
        .then(post => {
            console.log(`From createPost_postSave_post: ${post}`)
            res.status(201).json({
                message: "Post Created Successfully",
                post
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "Server Error",
                error
            })
        })
}

// Get All Posts
const getAllPosts = (req, res, next) => {
    Post.find()
        .populate("comments")
        .then(posts => {
            console.log(`From getAllPosts_Post_posts: ${posts}`)
            res.status(200).json({
                posts,
                user: req.user
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "Server Error",
                error
            })
        })
}

// Get Single Post By ID or Slug
const getSinglePost = (req, res, next) => {
    let { id } = req.params

    if (mongoose.Types.ObjectId.isValid(id)) {
        Post.findById(id)
            .populate("comments")
            .then(post => {
                console.log(`From getSinglePost_Post_post: ${post}`)
                if (post) {
                    res.status(200).json({
                        post
                    })
                } else {
                    res.status(204).json({
                        message: "No Post Found"
                    })
                }
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({
                    message: "Server Error",
                    error
                })
            })
    } else {
        Post.findOne({ slug: id })
            .then(post => {
                console.log(`From else_getSinglePost_Post_post: ${post}`)
                if (post) {
                    res.status(200).json({
                        post
                    })
                } else {
                    res.status(204).json({
                        message: "No Post Found"
                    })
                }
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({
                    message: "Server Error",
                    error
                })
            })
    }
}

// Upvote Controller
const upvote = (req, res, next) => {
    let { id } = req.params

    Post.findById(id)
        .then(post => {
            console.log(`From upvote_Post_post: ${post}`)
            Post.findByIdAndUpdate(id, { $set: { vote: post.vote + 1 } })
                .then(post1 => {
                    console.log(`From upvote_Post_post1: ${post1}`)
                    res.json({
                        message: "Done"
                    })
                })
                .catch(error => {
                    console.log(error)
                    res.status(500).json({
                        message: "Server Error",
                        error
                    })
                })
        })
}

// Downvote Controller
const downvote = (req, res, next) => {
    let { id } = req.params

    Post.findById(id)
        .then(post => {
            console.log(`From downvote_Post_post: ${post}`)
            Post.findByIdAndUpdate(id, { $set: { vote: post.vote - 1 } })
                .then(post1 => {
                    console.log(`From downvote_Post_post1: ${post1}`)
                    res.json({
                        message: "Done"
                    })
                })
                .catch(error => {
                    console.log(error)
                    res.status(500).json({
                        message: "Server Error",
                        error
                    })
                })
        })
}

// Edit a Post
const updatePost = (req, res, next) => {
    let { id } = req.params

    Post.findOneAndUpdate({ _id: id }, { $set: req.body })
        .then(post => Post.findById(id))
        .then(post => {
            console.log(`From updatePost_Post_post: ${post}`)
            res.json({
                message: "Updated Successfully",
                post
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "Server Error",
                error
            })
        })
}

// Delete Post
const deletePost = (req, res, next) => {
    let { id } = req.params

    Post.findOneAndDelete({ _id: id })
        .then(post => {
            console.log(`From deletePost_Post_post: ${post}`)
            res.json({
                message: "Post Deleted Successfully",
                post
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "Server Error",
                error
            })
        })
}

// Search Posts
const search = (req, res, next) => {
    let terms = req.body.terms

    Post.find({ $text: { $search: terms } })
        .then(results => {
            console.log(`From search_Post_results: ${post}`)
            if (results.length === 0) {
                res.json({
                    message: "No Data Found"
                })
            } else {
                res.json({
                    results
                })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "Server Error",
                error
            })
        })
}

module.exports = {
    createPost,
    getAllPosts,
    getSinglePost,
    upvote,
    downvote,
    updatePost,
    deletePost,
    search
}