const User = require("../models/User")

const getData = (req, res) => {
    User.find()
        .then(users => {
            res.json({
                users
            })
        })
        .catch(err => {
            res.json({
                message: "Error Occured .....",
                error: err
            })
        })
}

const postData = (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email
    })

    user.save()
        .then(data => {
            res.json({
                message: "User Created Successfully .....",
                user: data
            })
        })
        .catch(err => {
            res.json({
                message: "Error Occured .....",
                error: err
            })
        })
}

module.exports = {
    getData,
    postData
}