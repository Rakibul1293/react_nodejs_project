const express = require("express")
const bodyParser = require("body-parser")
const userRoute = require("./routes/userRoute")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/tcbc2_demo", { useNewUrlParser: true }, () => {
    console.log("DB Connected .....")
})

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    })
})

app.use("/api", userRoute)

app.listen(2222, () => {
    console.log("App is running .....")
})



// routes
// controllers
// models
// Examples: app.use("/api", userRoute) -> routes(userRoute) -> controllers -> models