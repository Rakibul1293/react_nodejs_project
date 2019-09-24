const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/tcbc2_demo", { useNewUrlParser: true }, () => {
    console.log("DB Connected .....")
})

const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: String,
    email: String
})

const User = mongoose.model("User", UserSchema)

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    })
})



// ---------- ***** Hard Code ***** ----------
app.get("/getData", (req, res) => {
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
})

app.get("/saveData", (req, res) => {
    let user = new User({
        name: "Rakibul Islam",
        email: "r@gmail.com"
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
})



// ---------- ***** Using body-parser ***** ----------
app.get("/data", (req, res) => {
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
})

app.post("/data", (req, res) => {
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
})

app.listen(2222, () => {
    console.log("App is running .....")
})