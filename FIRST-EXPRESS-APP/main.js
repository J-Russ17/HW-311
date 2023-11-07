const express = require("express")

let PORT = 8000

let app = express()

app.get("/hello", function(req, res){
    res.send("hello back")
})

app.post("/hello", function(req, res){
    res.json("Wassup")
})

app.listen(PORT, function(){
    console.log("App is running on PORT " + PORT)
})