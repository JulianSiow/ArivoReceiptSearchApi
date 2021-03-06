const db = require('../models');

//GET find all payments
const all = (req, res) => {
    db.Count.find({})
        .exec((err, allCounts) => {
            if (err) {
                console.log(err);
                return res.status(500);
            };
            res.json({
                status: 200,
                count: allCounts.length,
                data: allCounts
            });
        });
};

//POST add many counts
const addManyCounts = (req, res) => {
    req.body.forEach(count => {
        const newCount = {
            count: count.count,
            category: count.category,
            name: count.name,
            zone: count.zone,
            timestamp: count.timestamp,
            gateway: count.gateway,
            user: count.user,
            type: count.type,
            id: count.id,
            transaction_id: count.transaction_id
        }
        db.Count.create(newCount, (err, savedCount) => {
            if (err) {
                console.log(err);
                return res.status(500);
            }
            res.json({
                status: 201,
                data: savedCount
            });
        });
    })
}

//DELETE deleteAll
const deleteAll = (req, res) => {
    db.Count.deleteMany({}, (err, deletedCounts) => {
        if (err) return res.status(500)
        res.json({
            status: 200,
            message: 'all counts deleted',
            data: deletedCounts
        });
    });
};

module.exports = {
    all,
    addManyCounts,
    deleteAll
};