const express = require("express");
const port = 3000;
const server = express();

server.get("/", (req, res) => {
    res.send("CASEFY API");
});

server.listen(port, () => console.log("Server running on port: ", port));