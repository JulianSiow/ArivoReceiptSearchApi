const db = require('../models');

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

//POST add payment
const addPayment = (req,res) => {
    const newPayment = {
        request_amount: req.body.request_amount,
        om_payload: req.body.om_payload,
        timestamp: req.body.timestamp,
        type: req.body.type,
        gateway: req.body.gateway,
        name: req.body.name,
        receipt: req.body.receipt
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


module.exports = {
    all,
    addPayment
};