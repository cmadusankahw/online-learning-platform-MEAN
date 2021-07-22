const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");
require('dotenv').config();

const app = express();

// to get from env
const url = "/learn-online/v1/"

//import app segments
const auth = require('./controller/auth/auth');
const course = require('./controller/auth/courses');
const video = require('./controller/auth/video');
const teacher = require('./controller/auth/teacher');
const payemnt = require('./controller/auth/payment');
const paymentModel = require('./model/auth/payment.model');

mongoose.connect('mongodb+srv://dbadmin:login@db820@chemwin.kl7ag.mongodb.net/chemwin?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to monogodb database..');
    })
    .catch(() => {
        console.log('Connection to database failed!');
    });

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use("/images", express.static(path.join("src/assets/images/")));

//Allow CROS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //ToDo update in production
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS,PUT");
    next();
});


//functions here
app.use(url + 'auth', auth);
app.use(url + 'course', course);
app.use(url + 'video', video);
app.use(url + 'teacher', teacher);
app.use(url + 'payment', payemnt);

module.exports = app;