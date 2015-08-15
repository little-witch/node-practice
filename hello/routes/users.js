var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '关令娟的开心聊天室' });
});

module.exports = router;
