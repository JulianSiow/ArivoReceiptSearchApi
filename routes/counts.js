const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//PATH = /api/v1/counts

//GET all counts
router.get('/all', ctrl.counts.all);

//POST create new count
router.post('/add', ctrl.counts.addCount);

//POST create many counts
router.post('/addMany', ctrl.counts.addManyCounts);

//DELETE deleteAll
router.delete('/deleteAll', ctrl.counts.deleteAll);

module.exports = router;