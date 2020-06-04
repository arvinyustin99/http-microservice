'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;

const app = express();

// Untuk parsing body dari POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('This is HTTP-based endpoint.');
});

/*
 * Routing untuk api/v1/students
 */
app.use('/api/v1/students', require('./api/v1/students'));

app.use('/secret', (req, res) => {
	res.send('You\'re in Secret Chamber');
});

app.listen(port);

module.exports = express.Router;