var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница протеина */
router.get('/protein', function(req, res, next) {
    res.send("<h1>Страница протеина</h1>")
});
/* Страница бета-аланина */
router.get('/beta-alanine', function(req, res, next) {
    res.send("<h1>Страница бета-аланина</h1>")
});
/* Страница бца */
router.get('/bcaa', function(req, res, next) {
    res.send("<h1>Страница бца</h1>")
});
module.exports = router;
