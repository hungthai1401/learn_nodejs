var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express', description: 'Hello Express!!!' });
});

router.get('/test', (req, res, next) => {
  res.end('test get request');
});

router.post('/post', (req, res, next) => {
  res.end('test post request');
});

module.exports = router;
