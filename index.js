const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.send("This is a home page")
})

app.post("/",(req,res) => {
    res.send("This is a home page write")
})

app.listen(3001, ()=>{
    console.log("server is running 3001")
});