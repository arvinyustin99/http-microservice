const express = require('express');
const connection = require('../../dbConnection');
const router = express.Router();

router.get('/:id', (req, res) => {
	connection.query('SELECT * FROM student WHERE registration_number=' + req.params.id, (err, result, fields) =>{
		res.json(result);
	});
});

router.post('/', (req, res) => {
	connection.query('SELECT INTO students (name) VALUES (\'' + req.body.name + '\')', (err, result, fields) => {
		if (err)
			throw err;
		res.json(result);
	});
});

module.exports = router;