const express = require("express")

let PORT = 8002

let app = express()
app.use(express.json())

app.get("/add", function(req, res){
    let num1 = req.query.num1
    let num2 = req.query.num2

    if(num1 && num2){
        solution = parseInt(num1) + parseInt(num2)
    } else if(num1){
        solution = num1
    }else{
        solution = num2
    }

    res.send(`The sum of your numbers is ${solution}`)


})

app.post("/double/:num3", function(req, res){
    let num3 = req.params.num3

    let parse = parseInt(num3)

    solution = parse * 2

    res.send(`Double the amount of ${parse} is ${solution}`)
})

app.put("/multiply", function(req, res) {
    let num4 = req.query.num1;
    let num5 = req.query.num2;

    if (num4 && num5) {
        solution = parseInt(num4) * parseInt(num5);
    } else {
        res.status(400).send("Both num1 and num2 are required for multiplication.");
        return;
    }

    res.send(`The product of your numbers is ${solution}`);
});


app.listen(PORT, function(){
    console.log("PORT = " + PORT)
})



