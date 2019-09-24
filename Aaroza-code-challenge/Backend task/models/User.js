const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
        // allowNull: false,
        // comment: "null",
        
    },
    birthday: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    actors: [{
        name: {
            type: String,
            required: true
        },
        birthday: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    }]
})

const User = mongoose.model("User", UserSchema)

module.exports = User