const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// class Om_payload {
//     constructor(occupant_id, zone, transaction_id, payload_id) {
//         this.occupant_id = occupant_id,
//         this.zone = zone,
//         this.transaction_id = transaction_id,
//         this.payload_id = payload_id
//     }
// };

// class Gateway {
//     constructor(gate, direction) {
//         this.gate = gate,
//         this.direction = direction
//     }
// };

const PaymentSchema = mongoose.Schema({
    request_amount: Number,
    om_payload: {
        occupant_id: String,
        zone: String,
        transaction_id: String,
        payload_id: String
    },
    timestamp: String,
    type: String,
    gateway: {
        gate: String,
        direction: String
    },
    name: String,
    receipt: String
})

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;