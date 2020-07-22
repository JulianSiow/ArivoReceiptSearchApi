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
    let cardNumRegex = '';
    req.params.cardNum.split('').forEach(digit => {
        digit += "\\s*";
        cardNumRegex += digit;
    })
    
    req.params.date
    
    db.Payment.find({
        'om_payload.id': req.params.liscensePlate,
        //FIXME needs to check only first 4 digits of timestamp
        // "where": () => {
        //     const paymentDate = new Date(timestamp).setHours(0, 0, 0, 0)*1000;
        //     if (paymentDate === queriedDate) {
        //         return true;
        //     }
        //     return false;
        // },
        timestamp: {$gt: req.params.date, $lt: req.params.followingDate},
        "payment_payload.extra.card_number": {$regex: `.*${cardNumRegex}.*`}
    }, (err, matchedPayments) => {
        if (err) return res.status(500);
        res.json({
            status: 200,
            count: matchedPayments.length,
            data: matchedPayments,
            paymentDate: new Date(matchedPayments.timestamp).setHours(0, 0, 0, 0),
            queriedDate: new Date(req.params.date).setHours(0, 0, 0, 0)
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
        receipt: req.body.receipt
    }
    if(req.body.payment_payload) {
        const payment_payload = {
            payment_id: req.body.payment_payload.payment_id,
            amount: req.body.payment_payload.amount,
            payment_type: req.body.payment_payload.payment_type,
            extra: req.body.payment_payload.extra
        }
        newPayment.payment_payload = payment_payload;
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

//POST add many payments
const addManyPayments = (req, res) => {
    req.body.forEach (payment => {
        const newPayment = {
            request_amount: payment.request_amount,
            om_payload: payment.om_payload,
            timestamp: payment.timestamp,
            type: payment.type,
            gateway: payment.gateway,
            name: payment.name,
            receipt: payment.receipt,
            payment_payload: payment.payment_payload,
        }
        if(payment.payment_payload) {
            const payment_payload = {
                payment_id: payment.payment_payload.payment_id,
                amount: payment.payment_payload.amount,
                payment_type: payment.payment_payload.payment_type,
                extra: payment.payment_payload.extra
            }
            newPayment.payment_payload = payment_payload;
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
    })
}

//DELETE nuke
const nuke = (req, res) => {
    db.Payment.deleteMany({}, (err, deletedPayments) => {
        if (err) return res.status(500)
        res.json({
            status: 200,
            message: 'all payments deleted',
            data: deletedPayments
        })
    })
}

module.exports = {
    all,
    getPaymentsByParams,
    addPayment,
    addManyPayments,
    nuke
};