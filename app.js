const { json } = require('express');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/', require('./router'));

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log('SERVER corriendo en http://localhost:5000');
});

