const express = require('express');
const body_parser = require('body-parser');
const cookie_parser = require('cookie-parser');
const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');
const path = require('path');
const { DefaultDeserializer } = require('v8');
const cors = require('cors');
const app = express();
const user = require('./Routes/user_route');

// db connection
mongoose.connect('mongodb://127.0.0.1:27017/ProjectCollaboration', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;

db.on('error', (err)=> {
    console.log(err);
})

db.once('open', () => {
    console.log('db connection successfull');
})


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookie_parser());
app.use('/Uploads', express.static('Uploads'));

// router registration user
app.use('/api/user/', user);
// app.use('/api/user/', user);


// home route
app.get('/', (req, res) => {
    res.send('Welcome to Project Collaboration')
})

// runnning server
const server = app.listen(9000, ()=> {
    console.log('server running at 9000');
})