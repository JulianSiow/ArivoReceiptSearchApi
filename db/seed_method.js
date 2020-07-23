const lineReader = require('line-reader');
const axios = require('axios');

const deleteCounts = axios.delete('http://localhost:3000/api/v1/counts/deleteAll')
const deletePayments = axios.delete('http://localhost:3000/api/v1/payments/deleteAll')

axios.all([deleteCounts, deletePayments])
.then(
    console.log('payments and counts deleted'),
    lineReader.eachLine('./seed.js', (line) => {
        entry = JSON.parse(line);
        const payments = [];
        const counts = [];
        switch(entry[0]) {
            case 'payment':
                console.log('uploading payment...')
                payments.push(entry[1]);
                break;
            case 'count':
                console.log('uploading count...')
                counts.push(entry[1])
                break;
        }
        axios.post('http://localhost:3000/api/v1/payments/addMany', payments)
            .then((res) => {
                console.log(res)
            }, (err) => {
                console.log(err)
            });
        axios.post('http://localhost:3000/api/v1/counts/addMany', counts)
            .then((res) => {
                console.log(res)
            }, (err) => {
                console.log(err)
            });
    }
)).catch(err => {
    console.log(err);
});

