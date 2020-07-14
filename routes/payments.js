const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


//PATH = /api/v1/payments

//GET all payments
router.get('/all', ctrl.payments.all);

//POST new payment
router.post('/add', ctrl.payments.addPayment);

//DELETE nuke
router.delete('/yeet', ctrl.payments.yeet);

module.exports = router;