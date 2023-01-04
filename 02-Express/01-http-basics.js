const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req.method) // GET
    const url = req.url; // /

    // home page
    if(url === "/") {
        res.writeHead(200, {"content-type":"text/html"}) // 200 => Request successful
        
        // res.writeHead(200, {"content-type":"text/plain"})
        res.write("<h1>Home page</h1>");
        res.end();
    }
    // about page
    else if(url === "/about") {
        res.writeHead(200, {"content-type":"text/html"}) // 200 => Request successful
        res.write("<h1>About page</h1>");
        res.end();
    } else {
        res.writeHead(404, {"content-type":"text/html"}) // 200 => Request successful
        res.write("<h1>Page not found</h1>");
        res.end();
    }

    
})
server.listen(5000); 


// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types