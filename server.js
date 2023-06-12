var express=require('express');
var app=express();
var morgan=require('morgan');


// Load environmental variable
var dotenv=require('dotenv');
dotenv.config({path:'./config/config.env'});

//This is to connect dbs
var connectDB=require('./config/db');
connectDB();

//This is for body parser

app.use(express.json());

//location of file
var player=require('./routes/player');

//MThis is for mount router
app.use('/api/v1/player',player);

var PORT=process.env.PORT || 7000;
app.listen(PORT, console.log('The server has started'));