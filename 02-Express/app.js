const http = require("http");
const { readFileSync } = require("fs");

// Get all files
const homePage = readFileSync("./navbar-app/index.html")

// We are using fs because it will only read once

const server = http.createServer((req, res) => {
    
    const url = req.url; // /

    // home page
    if(url === "/") {
        res.writeHead(200, {"content-type":"text/html"}) // 200 => Request successful
        // console.log(req.method) // GET
        // res.writeHead(200, {"content-type":"text/plain"})
        res.write(homePage);
        res.end();
    }
    // about page
    else if(url === "/about") {
        res.writeHead(200, {"content-type":"text/html"}) // 200 => Request successful
        res.write("<h1>about page</h1>");
        res.end();
    } else {
        res.writeHead(404, {"content-type":"text/html"}) // 200 => Request successful
        res.write("<h1>Page not found</h1>");
        res.end();
    }

    
})
server.listen(5000); 


// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types