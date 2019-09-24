const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    try {
        let token = req.headers.authorization.split(' ')[1]
        return res.status(200).json({
            token
        })
        next()
    } catch (err) {
        console.log(err)
        res.json({
            message: "Authorization Failed ....."
        })
    }
}

module.exports = authenticate