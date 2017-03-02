//Packages needed
var express = require('express');
var router = express.Router();
var problem = require('../models/problems.js');

//Default route
router.get('/', function (req, res) {
	res.redirect('/problems?');
});

//Route used after pressing button
router.get('/problems/', function (req, res) {
	problem.all(function (data) {
		var hbsObject = { problems: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

module.exports = router;
