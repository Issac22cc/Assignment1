

var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
res.render('about', { title: 'About' });
});
router.get('/products', function(req, res, next) {
res.render('products', { title: 'Products' });
});
router.get('/contact', function(req, res, next) {
res.render('contact', { title: 'Contact' });
});
router.get('/services', function(req, res, next) {
res.render('services', { title: 'Services' });
});
module.exports = router;