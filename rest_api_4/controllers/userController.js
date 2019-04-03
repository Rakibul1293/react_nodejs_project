const Joi = require("joi")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")



const register = (req, res, next) => {
    let { username, name, email, password } = req.body

    const UserSchema = Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(30).required(),
        name: Joi.string().required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        // password: Joi.string().regex(/^[a-zA-Z0-9]{3, 30}$/).required()
        password: Joi.string().required()
    })

    const result = Joi.validate({
        username,
        name,
        email,
        password
    }, UserSchema, { abortEarly: false })
    // console.log(result)
    if (result.error) {
        // console.log(result.error)
        res.json({
            // error: result.error.details[0].message
            error: result.error.details.map(err => {
                // console.log(err)
                return err.message
            }),
            errors: result.error
        })
    } else {
        User.find({ email: result.value.email })
            .then(users => {
                console.log(`From register_User_users: ${users}`)
                if (users.length > 0) {
                    res.json({
                        message: "Email Already Taken ....."
                    })
                } else {
                    bcrypt.hash(result.value.password, 10, (err, hash) => {
                        if (err) {
                            console.log(err)
                            res.json({
                                error: err
                            })
                        }

                        let newUser = new User({
                            username: result.value.username,
                            name: result.value.name,
                            email: result.value.email,
                            password: hash
                        })

                        newUser.save()
                            .then(user => {
                                console.log(`From else_register_newUserSave_user: ${user}`)
                                res.json({
                                    user
                                })
                            })
                            .catch(err => {
                                console.log(err)
                                res.json({
                                    error: err
                                })
                            })
                    })
                }
            })
            .catch(err => {
                console.log(err)
                res.json({
                    error: err
                })
            })
    }
}

//     Joi.validate({
//         username,
//         name,
//         email,
//         password
//     }, UserSchema, (err, value) => {
//         if (err) {
//             console.log(err)
//             res.json({
//                 errors: err,
//                 error: err.details[0].message
//             })
//         }

//         console.log(value)
//         res.json({
//             value
//         })
//     })
// }

const getAllUser = (req, res, next) => {
    User.find()
        .then(users => {
            console.log(`From getAllUser_User_users: ${users}`)
            res.json({
                users
            })
        })
        .catch(err => {
            res.json({
                error: err
            })
        })
}

const login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            console.log(`From login_User_user: ${user}`)

            if (!user) {
                res.json({
                    message: "User Not Found ....."
                })
            }

            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    res.json({
                        error: err
                    })
                }

                if (!result) {
                    res.json({
                        message: "Password Doesn\'t Match ....."
                    })
                }

                const token = jwt.sign({
                    id: user._id,
                    email: user.email,
                    username: user.username
                }, "SECRET", { expiresIn: "2h" })

                res.json({
                    message: "Login Successfull .....",
                    // token: `Bearer ${token}`
                    token
                })
            })
        })
        .catch(error => {
            res.json({
                error
            })
        })
}

module.exports = {
    register,
    getAllUser,
    login
}




// Login
// JWT
// Protected Route -> Passport

// Check Email
// Password
// JWT Token
// User Response



// User Data
// Validate
// Check Duplicate User
// Base Password
// Save