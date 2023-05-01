const express = require("express");
const User = require("./models/User")
const userRoute = require("./routes/user");

const app = express();

app.use(express.json())
app.get("/api/users/find/:id", (req, res) => {
    const user =  User.findById(req.params.id);
    res.status(200).json(user);
});


module.exports = app;