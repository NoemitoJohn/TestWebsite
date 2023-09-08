const express = require('express');

const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res) => { // http://127.0.0.1:3000/ = /
    res.render('index', {packages: [{name: 'package1'}, {name: 'package2' }, {name: 'package3'}, {name: 'package4'}]})
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