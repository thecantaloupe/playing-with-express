require('dotenv').config();
const port = process.env.PORT || 3003;
const express = require('express');
const app = express();

//////////////////////////
//Greetings
//////////////////////////

app.get('/greeting', (req, res) => {
    res.send('Hello stranger');
});

app.get('/greeting/:name', (req, res) => {
    res.send('<i>Hello there.</i><br>' + req.params.name + ', you are a bold one!');
});

//////////////////////////
//Tip Calculator
//////////////////////////

app.get('/tip/:total/:tipPercentage', (req,res) => {
    const total = Number(req.params.total);
    const tipPercentage = Number(req.params.tipPercentage) * 0.01;
    const final = total * tipPercentage
    console.log(final)
    res.send(`You owe a total of ${final} smackaroos`)
})

//////////////////////////
//Magic 8 Ball
//////////////////////////

app.listen(port, () => {
    console.log("Express server is listening on port", port)
})