const express = require("express")
const app = express()
const tasks = require("./routes/tasks")

// Middleware
app.use(express.json()) // if we don't use it, then we won't have data in req.body

// Routes
app.get("/hello", (req, res) => {
    res.send("Task manager app")
})

app.use("/api/v1/tasks", tasks)

// app.get("/api/v1/tasks")
// app.post("/api/v1/tasks")
// app.get("/api/v1/tasks/:id")
// app.patch("/api/v1/tasks/:id")
// app.delete("/api/v1/tasks/:id")

const port = 3000

app.listen(port, console.log(`Server is listening on port ${port}`))