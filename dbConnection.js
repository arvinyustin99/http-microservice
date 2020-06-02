const mysql = require('mysql');

const SQLconnection = mysql.createConnection({
	host: '0.0.0.0',
	user: 'root',
	database: 'dblatihan',
	port: '3306'
});

SQLconnection.connect(err => {
	if (err)
		throw err;
	console.log('Connected')
})

module.exports = SQLconnection;