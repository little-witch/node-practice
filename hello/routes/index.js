var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '关令娟的开心聊天室' });
});

module.exports = router;
