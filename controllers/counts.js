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

//DELETE nuke
//FIXME Delete before prod
const yeet = (req, res) => {
    db.Count.deleteMany({}, (err, deletedCounts) => {
        if (err) return res.status(500)
        res.json({
            status: 200,
            message: 'YEET',
            data: deletedCounts
        });
    });
};

module.exports = {
    all,
    addCount,
    yeet
};