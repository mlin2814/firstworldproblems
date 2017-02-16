var express = require('express');
var router = express.Router();
var problem = require('../models/problems.js');

router.get('/', function (req, res) {
	res.redirect('/problems?');
});

router.get('/problems/', function (req, res) {
	problem.all(function (data) {
		var hbsObject = { problems: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


module.exports = router;
