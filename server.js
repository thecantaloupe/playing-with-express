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

app.listen(port, () => {
    console.log("Express server is listening on port", port)
})