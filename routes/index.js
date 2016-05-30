var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("req", req)
	console.log("req.body", req.body)
	console.log("req.query", req.query)
	console.log("req.params", req.params)
  res.send("我是乖宝宝,你说过要收下我的~~~")
});

router.post('/',function(req,res,next) {
	console.log("req", req)
	console.log("req.body", req.body)
	console.log("req.query", req.query)
	console.log("req.params", req.params)
	res.end("end")
})

module.exports = router;
