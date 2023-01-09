const express = require("express");
const app = express();

// Request => Middleware => Response

// Note that if I put the "req, res, next" in the arguments, express will do the rest for us
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // res.send("Testing")
    next();
}

app.get("/", logger, (req, res) => {

    res.send("Home")
})
app.get("/about", logger, (req, res) => {
    res.send("About")
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})

// The logger function is a middleware function, which means it is a function that gets executed as part of the request-response cycle. When an incoming HTTP GET request is made to the server, the server will execute the middleware function specified in the route handler before running the route handler itself. In this case, the logger function logs the HTTP method of the request, the url of the request, and the current year to the console.