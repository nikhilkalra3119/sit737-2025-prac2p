const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
    res.send("Hello SIT 737 by Nikhil");
});

const port = 3000;
app.listen(port, () => {
    console.log("Hello SIT 737");
    console.log(`Listening on port ${port}...`);
});