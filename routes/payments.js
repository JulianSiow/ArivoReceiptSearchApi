const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


//PATH = /api/v1/payments

//GET all payments
router.get('/all', ctrl.payments.all);

//GET payments by params
router.get('/:liscensePlate/:date/:followingDate/:cardNum', ctrl.payments.getPaymentsByParams);

//POST new payment
router.post('/add', ctrl.payments.addPayment);

//POST add multiple payments
router.post('/addMany', ctrl.payments.addManyPayments);

//DELETE nuke
router.delete('/nuke', ctrl.payments.nuke);

module.exports = router;