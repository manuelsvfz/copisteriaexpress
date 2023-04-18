var express = require('express');
var router = express.Router();
const db = require('../db')

router.get('/', function (req, res, next) {
    db.query('SELECT * FROM impresoras', function (err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });
});

router.put('/:id', function (req, res, next) {
    let id = req.params.id;
    let data = req.body;
    db.query('UPDATE impresoras SET ? WHERE idImpresora = ?', [data, id], function (err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    })
});

module.exports = router;
