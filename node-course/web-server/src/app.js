const path = require('path')
const express = require('express');



const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs');
app.use(express.static(path.join(publicDirectoryPath)));

app.get('', (req, res) => {
    res.render('index');
});

//weather page
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is sunny',
        location: 'Lviv'
    })
})

app.listen(3000, () => {
    console.log('Sever is up on port 3000');
});