const session = require('express-session');
var express = require('express');
var router = express.Router();

let printer1 = [];
let printer2 = [];
let printer3 = [];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/session', async (req, res, next) => {
  req.session.printers = { printer1, printer2, printer3 };
});

router.post('/session', async (req, res, next) => {
  console.log(req.params);
});

router.get('/hola', function (req, res, next) {
  res.json({ mensaje: 'Hola mundo' });
});

module.exports = router;
