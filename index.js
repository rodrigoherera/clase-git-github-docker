const express = require("express")

const app = express()


app.get("/ping", (req, res) => {
    console.log("is a hit")
    res.send("Pong")
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})