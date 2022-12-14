const http = require("http");

// req: what is coming in
// res: what is going out

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Home Page");
    }
    else if(req.url === "/about") {
        // BLOCKING CODE
        for(let i = 0; i < 1000; i++) {
            for(let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            } 
        }
        res.end("About page")
    } else {
        res.end("Error page")
    }
})

server.listen(5000, () =>{
    console.log("Server is listening on port 5000");
})