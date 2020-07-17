const lineReader = require('line-reader');
const axios = require('axios');

const deleteCounts = axios.delete('http://localhost:3000/api/v1/counts/yeet')
const deletePayments = axios.delete('http://localhost:3000/api/v1/payments/yeet')


//FIXME payments with receipts are not uploading
axios.all([deleteCounts, deletePayments])
.then(
    console.log('payments and counts deleted'),
    lineReader.eachLine('./seed.js', (line) => {
        entry = JSON.parse(line);
        switch(entry[0]) {
            case 'payment':
                console.log('uploading payment...')
                axios.post('http://localhost:3000/api/v1/payments/add', entry[1])
                .then((res) => {
                    console.log(res);
                }, (err) => {
                    console.log(err)
                });
                break;
            case 'count':
                console.log('uploading count...')
                axios.post('http://localhost:3000/api/v1/counts/add', entry[1])
                .then((res) => {
                    console.log(res);
                }, (err) => {
                    console.log(err)
                });
                break;
        }
    }
)).catch(err => {
    console.log(err);
});

