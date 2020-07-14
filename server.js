const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;

const routes = require('./routes');

//==================================== MIDDLEWARE ============================================

//Mongoose Connection
mongoose.connect('mongodb://localhost/receipt-search-api', { useNewUrlParser: true } );

//CORS 
const corsOptions = {
    origin: [`http://localhost:3000`],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

//BodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//===================================== ROUTES ==============================================

app.get('/', (req, res) => {
    res.send('<h1>Arivo Receipt Search API Interview Task</h1>')
})

app.listen(PORT, () => console.log(`Server connected at http://localhost:${PORT}`));