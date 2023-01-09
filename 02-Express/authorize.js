const authorize = (req, res, next) => {
    const { user } = req.query
    if(user == "john" ) {
        req.user = { name: "john", id: 3}
        next() // NECESSARY
    } else {
        res.status(401).send("Unauthorized")
    }
}

module.exports = authorize