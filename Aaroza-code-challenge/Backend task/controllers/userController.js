const Joi = require("joi")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const actors = (req, res, next) => {
    User.find()
        .then(users => {

            const actor = [{
                  "name": `${users[0].actors[0].name}`,
                  "birthday": `${users[0].actors[0].birthday}`,
                  "country": `${users[0].actors[0].country}`
            }]

            console.log(JSON.stringify(actor, null, 2))

            res.json({
                actor
            })
        })
        .catch(err => {
            console.log(err)
            res.json({
                error: err
            })
        })
}





const signup = (req, res, next) => {
    let { username, name, email, password, birthday, country, title, year, rating, actors } = req.body

    const UserSchema = Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(30).required(),
        name: Joi.string().required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        password: Joi.string().required(),
        birthday: Joi.string().required(),
        country: Joi.string().required(),
        title: Joi.string().required(),
        year: Joi.string().required(),
        rating: Joi.string().required(),
        actors: Joi.object(
            [{
                name: Joi.string().required(),
                birthday: Joi.string().required(),
                country: Joi.string().required()
            }]
        )
    })

    const actor = Object.assign({}, actors)

    const result = Joi.validate({
        username,
        name,
        email,
        password,
        birthday,
        country,
        title,
        year,
        rating,
        actors: actor
    }, UserSchema, { abortEarly: false })

    if (result.error) {
        res.json({
            error: result.error.details.map(err => {
                return err.message
            }),
            errors: result.error
        })
    } else {
        User.find({ username: result.value.username })
            .then(users => {
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
                            password: hash,
                            birthday: result.value.birthday,
                            country: result.value.country,
                            title: result.value.title,
                            year: result.value.year,
                            rating: result.value.rating,
                            actors: [{
                                name: result.value.actors[0].name,
                                birthday: result.value.actors[0].birthday,
                                country: result.value.actors[0].country
                            }]
                        })

                        newUser.save()
                            .then(user => {
                                const token = jwt.sign({
                                    id: user._id,
                                    email: user.email,
                                    username: user.username
                                }, "SECRET", { expiresIn: "2h" })
                                res.json({
                                    token
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





const login = (req, res, next) => {
    User.findOne({ username: req.body.username })
        .then(user => {

            if (!user) {
                res.json({
                    message: "User Not Found ....."
                })
            }

            bcrypt.compare(req.body.password, user.password, (err, result) => {

                if (err) {
                    return res.status(401).json({
                        message: 'Authentication Failed'
                    })
                }

                if (!result) {
                    res.json({
                        message: "Password Not Matched ....."
                    })
                    return
                }

                if (result) {
                    const token = jwt.sign({
                        id: user._id,
                        email: user.email,
                        username: user.username
                    }, "SECRET", { expiresIn: "2h" })

                    return res.status(200).json({
                        token
                    })
                }

                return res.status(401).json({
                    message: 'Authentication Failed'
                })            
            })
        })
        .catch(error => {
            console.log(err)
            res.json({
                error
            })
        })
}





const movies = (req, res, next) => {
    User.find()
        .then(users => {

            const movie = [{
                "title": `${users[0].title}`,
                "year": `${users[0].year}`,
                "rating": `${users[0].rating}`,
                "actors": [{
                  "name": `${users[0].actors[0].name}`,
                  "birthday": `${users[0].actors[0].birthday}`,
                  "country": `${users[0].actors[0].country}`
                }]
            }]

            console.log(JSON.stringify(movie, null, 2))

            res.json({
                movie
            })
        })
        .catch(err => {
            console.log(err)
            res.json({
                error: err
            })
        })
}



module.exports = {
    actors,
    signup,
    login,
    movies
}