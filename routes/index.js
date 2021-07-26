var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Loughborough Space' });
});

router.get('/contact', function(req, res, next){
  res.render('contact', { title: 'Contact' });
});

router.get('/projects', function(req, res, next){
  res.render('projects', { title: 'Projects' });
});


router.get('/team', function(req, res, next){
  res.render('team', { title: 'Team' });
});

router.get('/chimera', function(req, res, next){
  res.render('chimera', { title: 'Chimera' });
});

router.get('/beacon', function(req, res, next){
  res.render('beacon', { title: 'Beacon' });
});

router.get('/legacy', function(req, res, next){
  res.render('legacy', { title: 'Legacy' });
});

module.exports = router;
