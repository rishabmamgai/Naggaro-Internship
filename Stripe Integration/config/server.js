require('dotenv').config({ path: "D:\\Naggaro Internship\\Stripe Integration\\config\\.env" });

const { application } = require('express');
const express = require('express');
const app = express();

app.listen(process.env.SERVER_PORT, (err) => {
    if(err)
        console.log(err);

    else
        console.log(`Server running at Port : ${process.env.SERVER_PORT} \n`);
});

module.exports = app;
