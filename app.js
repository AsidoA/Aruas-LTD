const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'))
app.use('/fonts', express.static(__dirname + '/fonts'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/inc', express.static(__dirname + '/inc'))
app.use(express.urlencoded({extended:false}))

const Hp = require('./API/V1/Routers/HP')
app.use('/',Hp)



app.set('view engine' , 'ejs');

module.exports = app;