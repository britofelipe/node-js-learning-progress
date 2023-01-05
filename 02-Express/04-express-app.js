const express = require("express");
const path = require("path");

const app = express();

// Setup static and middleware
app.use(express.static("./public")) // The common case is to create a folder by the name of public

app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname,"./navbar-app/index.html")) // or path.join
})

app.all("*",(req,resp)=>{
    res.status(404).send("Resource not found");
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000...");
})

// All the resources are available right away
// It is static because the server doesn't need to change it