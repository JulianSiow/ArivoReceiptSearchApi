const db = require('../models');

//GET find all payments
const all = (req, res) => {
    db.Payment.find({})
        .exec((err, allPayments) => {
            if (err) {
                console.log(err);
                return res.status(500);
            };
            res.json({
                status: 200,
                count: allPayments.length,
                data: allPayments
            });
        });
};

//GET find by params
//Should maybe be a POST?
//TODO find by certain params
const getPaymentsByParams = (req, res) => { 
    db.Payment.find({
        'om_payload.id': req.params.liscensePlate,
        timestamp: req.params.date,
        "payment_payload.extra.card_number": {$regex: `.*${req.params.cardNum}.*`}
    }, (err, matchedPayments) => {
        if (err) return res.status(500);
        res.json({
            status: 200,
            count: matchedPayments.length,
            data: matchedPayments
        })
    })
}

//POST add payment
const addPayment = (req,res) => {
    const newPayment = {
        request_amount: req.body.request_amount,
        om_payload: req.body.om_payload,
        timestamp: req.body.timestamp,
        type: req.body.type,
        gateway: req.body.gateway,
        name: req.body.name,
        receipt: req.body.receipt,
        payment_payload: req.body.payment_payload
    }
    db.Payment.create(newPayment, (err, savedPayment) => {
        if (err) {
            console.log(err);
            return res.status(500);
        }
        res.json({
            status: 201,
            data: savedPayment
        });
    });
};

//DELETE nuke
//FIXME Delete before prod
const yeet = (req, res) => {
    db.Payment.deleteMany({}, (err, deletedPayments) => {
        if (err) return res.status(500)
        res.json({
            status: 200,
            message: 'YEET',
            data: deletedPayments
        })
    })
}

module.exports = {
    all,
    getPaymentsByParams,
    addPayment,
    yeet
};