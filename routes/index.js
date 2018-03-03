var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var title = {
		"name" : "Tim"
	};
	res.json(title);
});

module.exports = router;
