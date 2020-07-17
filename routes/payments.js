const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


//PATH = /api/v1/payments

//GET all payments
router.get('/all', ctrl.payments.all);

//GET payments by params
router.get('/:liscensePlate/:date/:cardNum', ctrl.payments.getPaymentsByParams);

//POST new payment
router.post('/add', ctrl.payments.addPayment);

//DELETE nuke
router.delete('/yeet', ctrl.payments.yeet);

module.exports = router;