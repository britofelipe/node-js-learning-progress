const express = require("express");
const path = require("path");

const app = express();

// Setup static and middleware
app.use(express.static("./public")) // The common case is to create a folder by the name of public

// app.get("/", (req, res) =>{
//     res.sendFile(path.resolve(__dirname,"./navbar-app/index.html")) // or path.join
//      adding to static assets
//      SSR
// })

app.all("*",(req, res)=>{
    res.status(404).send("Resource not found");
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000...");
})