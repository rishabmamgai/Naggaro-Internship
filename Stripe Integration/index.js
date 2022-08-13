require('dotenv').config({ path: "D:\\Naggaro Internship\\Stripe Integration\\config\\.env" });

const app = require('./config/server');

const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);
const express = require('express');
const ejs = require('ejs');


app.set('view engine', 'ejs');
app.set("view options", {layout: false});
app.set('views', __dirname + '\\views\\public');
app.use(express.json());


app.get('/', (req, res) => {
    console.log("Checkout Page \n");
    res.render('checkout', {product: "Redmi note 10 Pro", price: "16,999", quantity: 2});
});

app.post('/create-checkout-session', async (req, res) => {
    const { product } = req.body;

    console.log(product);
    console.log("Creating checkout session \n");

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: product.name,
                        },
                        unit_amount: product.amount,
                    },
                    quantity: product.quantity,
                },
            ],
            mode: "payment",
            payment_method_types: ['card'],
            success_url: `http://localhost:${process.env.SERVER_PORT}/success`,
            cancel_url: `http://localhost:${process.env.SERVER_PORT}/cancel`,
        });

        res.json({ id: session.id });
    }
    catch(error) {
        console.log(error);
    }
});

app.get('/success', (req, res) => {
    console.log("Payment Successfull \n");
    res.render('paymentSuccess', {msg: "Payment Successful."});
});

app.get('/cancel', async (req, res) => {
    console.log("Payment Cancelled \n");
    res.render('paymentCancel', {msg: "Payment Cancelled."});
});
