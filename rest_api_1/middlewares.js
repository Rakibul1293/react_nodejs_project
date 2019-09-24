const validator = require("validator")

const log = (req, res, next) => {
    console.log(`${req.method} - ${req.url}`)
    next()
}

const validateEmail = (req, res, next) => {
    let { email } = req.body

    let isValid = validator.isEmail(email)

    if (isValid) {
        next()
    } else {
        res.json({
            message: "Please Enter a Valid Email ....."
        })
    }
}

const sampleController = (req, res, next) => {
    res.json({
        message: "Thank's For Providing a Valid Email .....",
        email: req.body.email
    })
}

module.exports = {
    log,
    validateEmail,
    sampleController
}