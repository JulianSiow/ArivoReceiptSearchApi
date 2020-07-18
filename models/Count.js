const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountSchema = mongoose.Schema({
    count: Number,
    category: String,
    name: String,
    zone: String,
    timestamp: Number,
    gateway: {
        gate: String,
        direction: String
    },
    User: String,
    type: String,
    id: String,
    transaction_id: String
})

const Count = mongoose.model('Count', CountSchema);

module.exports = Count;