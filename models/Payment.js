const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = mongoose.Schema({
    request_amount: Number,
    om_payload: {
        occupant_id: String,
        zone: String,
        transaction_id: String,
        payload_id: String,
        id: String
    },
    timestamp: String,
    type: String,
    gateway: {
        gate: String,
        direction: String
    },
    name: String,
    receipt: String,
    payment_payload: {
        payment_id: String,
        amount: Number,
        payment_type: String,
        extra: Object
    }
})

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;