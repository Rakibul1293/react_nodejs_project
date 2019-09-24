const router = require("express").Router()
const { actors, signup, login, movies } = require("../controllers/userController")
const authenticate = require("../middlewares/authenticate")

router.get("/actors", actors)
router.post("/user/signup", signup)
router.post("/user/login", login)
router.get("/movies", authenticate, movies)

module.exports = router