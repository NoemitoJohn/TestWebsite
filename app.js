const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("Home Page")

})

app.get('/booking', (req, res) => {
    res.send("Booking Page")

})

app.get('/package', (req, res) => {
    res.send("Package Page")

})

app.get('/about', (req, res) => {
    res.send("About Page")

})


app.listen(3000);