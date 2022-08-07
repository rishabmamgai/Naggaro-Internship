require('dotenv').config({ path: 'D:\\Naggaro Internship\\Jokes App\\config\\.env' });

const express = require('express');
const app = express();

app.listen(process.env.SERVER_PORT, function(err) {
    if(err)
        console.log("Server Down");
    
    else
        console.log(`Server running at port ${process.env.SERVER_PORT}`);
});

module.exports = app;
