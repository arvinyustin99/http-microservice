'use strict';

const express = require('express');
const port = 8080;
const connection = require('./dbConnection');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');

});

app.use('/api/v1/students', require('./api/v1/students'));

app.use('/asu/d', () => {
	connection.query("SELECT * FROM student", (err, result, fields) => {
		if (err)
			throw err;
		console.log(result);
	});
	console.log('You\'re in');
});

app.listen(port, function() {
	console.log('Listening on Port :' + port);
});

module.exports = express.Router;