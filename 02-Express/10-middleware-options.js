const express = require("express")
const app = express()
const logger = require("./logger")
const authorize = require("./authorize")

// We can also pass the middleware function like this:
app.use(authorize, logger)
// app.use(express.static("./public"))

// NOTE THAT: Order matters! Only the "app.get" after the middleware function calls it

// 1. use vc route
// 2. options - our own / express / third party

app.use(morgan("tiny"))

app.get("/", logger, (req, res) => {

    res.send("Home")
})
app.get("/about", logger, (req, res) => {
    res.send("About")
})
app.get("/api/products", logger, (req, res) => {
    res.send("Products")
})
app.get("/api/items", logger, (req, res) => {
    console.log(req.user)
    res.send("Items")
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})

// The logger function is a middleware function, which means it is a function that gets executed as part of the request-response cycle. When an incoming HTTP GET request is made to the server, the server will execute the middleware function specified in the route handler before running the route handler itself. In this case, the logger function logs the HTTP method of the request, the url of the request, and the current year to the console.