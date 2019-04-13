const JWTStrategy = require("passport-jwt").Strategy
const ExtractJWT = require("passport-jwt").ExtractJwt
const User = require("../models/User")

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "SECRET"
}

module.exports = passport => {
    passport.use(new JWTStrategy(opts, (payload, done) => {
        User.findOne({ _id: payload.id })
            .then(user => {
                console.log(`From passport(user): ${user}`)
                if (!user) {
                    done(null, false)
                } else {
                    done(null, user)
                }
            })
            .catch(error => {
                console.log(error)
                done(error)
            })
    }))
} 