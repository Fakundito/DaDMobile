const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())

//functions
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/route'));


app.listen(3600);
console.log('Server listening on port 3600')
