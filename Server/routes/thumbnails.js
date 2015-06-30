var express = require('express');
var mysql = require('mysql');

var router = express.Router();
var connection = mysql.createConnection({

	'host' : 'appjam.cyjao5zjyirq.us-west-2.rds.amazonaws.com',
	'user' : 'user',
	'password' : 'appjam123',
	'database' : 'sopt',
});

router.get('/', function(req, res, next) {
  
	connection.query('select id, title, timestamp from board order by timestamp desc;', function (error, cursor) {
		
		res.json(cursor);
	});
});

module.exports = router;
