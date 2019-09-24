const router = require("express").Router()
const { register, getAllUser, login } = require("../controllers/userController")
const authenticate = require("../middlewares/authenticate")
const passport = require("passport")

router.post("/register", register)

router.post("/login", login)

// router.get("/", getAllUser)
// router.get("/", authenticate, getAllUser)
router.get("/", passport.authenticate("jwt", { session: false }), getAllUser)

module.exports = router


// Signup
// Signin
// All User
// Single User
// Edit User
// Delete User
// Search