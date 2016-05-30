var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.query)
  res.send(req.query["echostr"])
});

router.post('/',function(req,res,next) {
	console.log("req.body", req.body)
	console.log("req.query", req.query)
	console.log("req.params", req.params)
	res.end("end")
})

module.exports = router;
