const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


//PATH = /api/v1/payments

//GET all payments
router.get('/all', ctrl.payments.all);

//GET payments by params
router.get('/:liscensePlate/:date/:followingDate/:cardNum', ctrl.payments.getPaymentsByParams);

//POST add multiple payments
router.post('/addMany', ctrl.payments.addManyPayments);

//DELETE deleteAll
router.delete('/deleteAll', ctrl.payments.deleteAll);

module.exports = router;