require('dotenv').config();
const port = process.env.PORT || 3003;
const express = require('express');
const app = express();

let bottles = 99
let bottleon = 99

app.get('/', (req, res) => {
    bottles = 99
    bottles -= 1
    console.log(bottles)
    res.send(`99 Bottles of beer on the wall<br>99 Bottles of beer<br><a href='/${bottles}'>Take one down, pass it around</a>`)
})

app.get('/note', (req, res) => {
    let owed = Math.abs(bottleon)
    if (bottleon >=0) {
        res.send(`There are ${bottleon} bottles of beer on the wall`)
    } else {
        res.send(`Whoever holds this note owes ${owed} bottles of beer`)
    }
})


app.get('/:bottles', (req, res) => {
    bottleon = req.params.bottles
    console.log(bottleon)
    bottles = bottleon -1
    if (bottleon > 0) {
        res.send(`${bottleon} Bottles of beer on the wall<br>${bottleon} Bottles of beer<br><a href='/${bottles}'>Take one down, pass one around</a>`)
    } else if (bottleon == 0) {
        res.send(`0 Bottles of beer on the wall<br><a href='/'>Press here to restock</a>`)
    } else {
        res.send(`You see a note on the wall with an message on it<br><a href='/note'>Read Message</a>`)
    }
})

// Fibonacci
const fibonacci = (num) => {
    const fibnum = (1+(Math.sqrt(5))) / 2
    const num1 = Math.pow(fibnum, num)
    const num2 = Math.pow((1 - fibnum), num)
    return(Math.round((num1 - num2) / Math.sqrt(5)))
}

//iterate over sequential fibonacci numbers and returns if number is fibonacci number
const testfib = (num) => {
    let i = 1
    let fib = 0
    let limit = num

    while (fib < limit) {
        fib = fibonacci(i)
        i++
        if (fib == num) {
            console.log(fib + " is a fib")
            return true;
        } else {
            console.log(fib + " is not a fib")
        }
    }
}

app.get('/fibonacci/:number', (req,res) => {
    let number = req.params.number
    if (testfib(number) == true){
        res.send(`<i>${number}</i><br><h1>is Fib</h1>`)
    } else {
        res.send(`<h1><i>${number}</i><br>is NOT Fib</h1>`)
    }
})


app.listen(port, () => {
    console.log("Express server is listening on port", port)
})