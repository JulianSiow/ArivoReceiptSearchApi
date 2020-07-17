const lineReader = require('line-reader');
const db = require('../models');

db.Count.remove({}, () => {
    console.log('counts deleted, seeding...')
})

lineReader.eachLine('./seed.js', (line) => {
    entry = JSON.parse(line);
    switch(entry[0]) {
        case 'payment':
            console.log('this is a payment')
            //TODO upload payment

            break;
        case 'count':
            console.log('this is a count')
            //TODO upload count
            break;
    }
})