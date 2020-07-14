const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;

const routes = require('./routes');

//==================================== MIDDLEWARE ============================================

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

app.use('/api/v1/payments', routes.payments);

app.listen(PORT, () => console.log(`Server connected at http://localhost:${PORT}`));