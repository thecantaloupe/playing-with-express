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

const eightBitReponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


app.get('/magic/:question', (req,res) => {
    let question = req.params.question
    //bitwise operator - faster for under 16b but has problems with neg
    let response = eightBitReponse[~~(Math.random() * eightBitReponse.length)]
    res.send(`<i>"${question}"</i><br><h1>${response}</h1>`)
    
})


app.listen(port, () => {
    console.log("Express server is listening on port", port)
})