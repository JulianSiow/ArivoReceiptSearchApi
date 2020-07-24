# Arivo Receipt Search API

## Introduction

This is the back end solution to an interview task provided by [Arivo](https://arivo.co/).  The front end built to consume this API can be found [here](https://github.com/JulianSiow/ArivoReceiptSearchFrontend).

This solution was built utilizing Node.js, Express, MongoDB and Mongoose.  For my database I decided to use MongoDB/Mongoose as in my opinion, a NoSQL database is ideal for data where there are often nested documents such as ```payment.om_payload``` and ```payment.payment_payload.extra```. Both of these are useful however would not make sense as their own stand alone documents without context, and thus may save a database query or two per request.  I decided on the combination of Node.js and Express as my server technologies because of their light weight and unopinionated nature, as well as my familiarity using them with NoSQL technologies.  

## Getting Started

To start this API on your machine, please ensure you have [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/) installed.  Once this repo is cloned on your machine, navigate to it using your choice of terminal and run: 
```npm i```
This will install the required dependancies.  Before you can start the server, you will need to configure a .env file.  Create a new file called .env, and inside that file add these lines:
```PORT=3000
MONGO_URI=mongodb://localhost/receipt-search-api
```
Then, in two seperate terminals, run:
```mongod```
to start your database and:
```nodemon```
to spin up the server.  

To seed the database with the example data, navigate to ```ReceiptSearchBackend/db``` and run ```node seed_method.js``` with the server running.  