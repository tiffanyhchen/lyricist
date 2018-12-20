const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
var morgan = require('morgan')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('client/dist'));

//morgan is only used to generate logs so we can track all of the requests better
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.listen(port, () => {console.log(`Listening to port ${port}`)});