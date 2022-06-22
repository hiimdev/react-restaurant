const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Post = 8001;
const ApiRoute = require('./routes/data.routes.js');

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', ApiRoute);

mongoose.connect(
    'mongodb+srv://restaurant:restaurant@cluster0.zs9vp3z.mongodb.net/?retryWrites=true&w=majority',
    {useNewUrlParser: true},
);
var db = mongoose.connection;
if (!db) console.log('Error connecting db');
else console.log('Db connected successfully');
app.get('/', (req, res) => {
    res.send('We are on home');
});
app.listen(Post, function() {
    console.log(`The server is running on ${Post}`);
});
