var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var body ={
	  "code": 0,
	  "msg": "Get Todos Successfully",
	  "result": [
	    {
	      "id": "1",
	      "content": "Todo 1",
	      "isDone": false
	    },
	    {
	      "id": "2",
	      "content": "Todo 2",
	      "isDone": true
	    }
	  ]
	}
	res.json(body)
});

router.post('/', function(req, res, next) {
	
	var content = req.body.content;
	var body = {
	  "code": 0,
	  "msg": "Create Todo Successfully",
	  "result": {
	    "id": "1",
	    "content": content,
	    "isDone": false
	  }
	}
	console.log(req.body)

  res.json(body)
});

router.put('/:todo_id', function(req, res, next) {
  	var id = req.params.todo_id;

  	body = {
	  "code": 0,
	  "msg": "Modify Todo Successfully",
	  "result": {
	    "id": id,
	    "content": "New Todo Content",
	    "isDone": true
	  }
	};
	res.json(body)
});

router.delete('/:todo_id', function(req, res, next) {
	var id = req.params.todo_id;
	var body = {
	  "code": 0,
	  "msg": "Delete Todo: "+ id +" Successfully"
	}
  res.json(body)
});

module.exports = router;
