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

//POST add count 
const addCount = (req, res) => {
    const newCount = {
        count: req.body.count,
        category: req.body.category,
        name: req.body.name,
        zone: req.body.zone,
        timestamp: req.body.timestamp,
        gateway: req.body.gateway,
        user: req.body.user,
        type: req.body.type,
        id: req.body.id,
        transaction_id: req.body.transaction_id
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

//DELETE nuke
const nuke = (req, res) => {
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
    addCount,
    addManyCounts,
    nuke
};