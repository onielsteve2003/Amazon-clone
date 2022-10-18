const functions = require("firebase-functions");
const express = require('express')
const cors = require("cors");
const stripe = require('stripe')
('sk_test_51LmwnNI1KVD2wTUAEFUUbArQYWyNmfnZNtdxpLaiNIupfMj1ATwUcoB2oCBKFj6NV2fdFqZbO0upfJfQlBcUwC9g00W1gWyEaV')

// API

// APP CONFIG
const app = express()

// MIDDLEWARES
app.use(cors())
app.use(express.json())

// API ROUTES
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.post('/payments/create', async(req, res) => {
    const total = req.query.total
    console.log('Payment Request Amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    // console.log(paymentIntent);
    // OK - Created
    res.status(201).send({
    clientSecret: paymentIntent.client_secret,
    });
})

// LISTEN COMMAND
exports.api = functions.https.onRequest(app)
// app.listen(5000, () => console.log(`Node server listening at http://localhost:5000`));
// Example Endpoint: http://localhost:5001/clone-c9183/us-central1/api

