const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class Gateway {
    constructor(gate, direction) {
        this.gate = gate,
        this.direction = direction
    }
};

const CountSchema = mongoose.Schema({
    count: Number,
    category: String,
    name: String,
    zone: String,
    timestamp: String,
    gateway: Gateway,
    User: String,
    type: String,
    id: String,
    transaction_id: String
})

const Count = mongoose.model('Count', CountSchema);

module.exports = Count;