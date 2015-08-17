var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var q = req.query.q;
  res.render('search', { title: 'Medical Search' ,mensaje:'Express is powerfull',query:q});
});

module.exports = router;