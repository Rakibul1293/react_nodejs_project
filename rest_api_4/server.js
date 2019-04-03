// require('events').EventEmitter.prototype._maxListeners = 100
process.setMaxListeners(0)
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require("passport")
const postRouter = require('./routes/postRoute')
const userRouter = require('./routes/userRoutes')

mongoose.connect('mongodb://localhost/tcbc2_demos', { useNewUrlParser: true }, () => {
  console.log('DB Connected .....')
}
)

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(passport.initialize())
require("./middlewares/passportjwt")(passport)

app.use('/api/posts', postRouter)
app.use('/api/users', userRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

app.listen(2222, () => {
  console.log('App is running .....')
});

// Process of setting process.env.PORT on Windows: set PORT=2222
// const port = process.env.PORT || 1111
// app.listen(port, () => {
//   console.log(`Listening on Port ${port} .....`)
// });