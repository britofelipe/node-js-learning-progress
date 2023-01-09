const express = require("express")
const app = express()
const logger = require("./logger")

// We can also pass the middleware function like this:
app.use(logger)

// NOTE THAT: Order matters! Only the "app.get" after the middleware function calls it

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
    res.send("Items")
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})

// The logger function is a middleware function, which means it is a function that gets executed as part of the request-response cycle. When an incoming HTTP GET request is made to the server, the server will execute the middleware function specified in the route handler before running the route handler itself. In this case, the logger function logs the HTTP method of the request, the url of the request, and the current year to the console.