const express = require("express")
const bodyParser = require("body-parser")
const data = require("./data")
const { log, validateEmail, sampleController } = require("./middlewares")

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(log)



// For Get Data
app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/index.html")
    res.sendFile('index.html', { root: __dirname });
    // res.json({
    //     message: "Hello World"
    // })
})



// For Get Data
app.get("/users", (req, res) => {
    //console.log(data)
    res.json(data)
})



// For Get Data
app.get("/userss", (req, res) => {
    // console.log(req)
    // console.log(req.headers)
    res.json(database)
})



// For Get Data
app.get("/usersss/:id", (req, res) => {
    // console.log(req.params.id)

    let { id } = req.params
    let obj = database.filter(user => user.id == id)

    if (obj.length > 0) {
        res.json(obj[0])
    } else {
        res.json({
            message: "No User Found"
        })
    }
})



// For Create Data
app.post("/userssss", (req, res) => {
    // console.log(req.body)

    let user = {
        name: req.body.name,
        id: req.body.id
    }
    database.push(user)
    res.json({
        message: "User Created Successfully ....."
    })
})



// For Create Data
app.post("/sampleController", validateEmail, sampleController)


// For Update Data
app.put("/usersssss/:id", (req, res) => {
    const { id } = req.params

    let newObj = {
        name: req.body.name,
        id
    }

    let index = database.findIndex(user => user.id == id)
    database[index] = newObj

    res.json({
        message: "Updated Successfully .....",
        user: newObj
    })
})



// For Delete Data
app.delete("/userssssss/:id", (req, res) => {
    let { id } = req.params

    database = database.filter(user => id !== user.id)

    res.json({
        message: "Deleted Successfully ....."
    })
})



app.listen(8080, () => {
    console.log("Our app is on fire .....")
})








// Routing -> URL Pattern
// Controller -> Handle Request
// Model -> Data Handle [Database]

let database = [
    {
        name: "Shofiqul Islam",
        id: 1
    },
    {
        name: "Rakibul Islam",
        id: 2
    },
    {
        name: "Shoriful Islam",
        id: 3
    },
    {
        name: "Nurunnahar Begum",
        id: 4
    }
]