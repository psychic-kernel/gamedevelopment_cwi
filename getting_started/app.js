const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    res.render('index.html', {title: "My Phaser Game"});
});

app.listen(3000, ()=> {
    console.log('listening on http://localhost:3000');
});