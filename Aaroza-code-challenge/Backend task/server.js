const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRouter = require('./routes/userRoutes')

mongoose.connect('mongodb://localhost/Aaroza_Infotech_Ltd', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
	  console.log('DB Connected .....')
	}
)

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/host/api', userRouter)

app.listen(2222, () => {
  console.log('App is running .....')
});