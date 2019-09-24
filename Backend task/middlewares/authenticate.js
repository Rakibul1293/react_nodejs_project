const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    try {
        let token = req.headers.authorization.split(' ')[1]
        // console.log(`From authenticate(token): ${token}`)
        next()
    } catch (err) {
        console.log(err)
        res.json({
            message: "Authorization Failed ....."
        })
    }
}

module.exports = authenticate