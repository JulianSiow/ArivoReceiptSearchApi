const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//PATH = /api/v1/counts

//GET all counts
router.get('/all', ctrl.counts.all);

//POST create new count
router.post('/add', ctrl.counts.addCount);

//DELETE nuke
router.delete('/yeet', ctrl.counts.yeet);

module.exports = router;