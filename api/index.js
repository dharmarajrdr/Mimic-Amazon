const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemoailer = require('nodemailer');
const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

mongoose.connect("mongodb+srv://dharmaraj171215:dharmaraj171215@cluster0.fad8uye.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((value) => {
    console.log('MongoDB connected');
}).catch((reason) => {
    console.log('Error while connecting to mongoDB : ', reason);
});

app.listen(port,()=>{
    console.log('Server is running on port 8000');
});