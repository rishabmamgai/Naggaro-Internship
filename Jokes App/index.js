require('dotenv').config();

const con = require('./config/dbConnection');
const app = require('./config/server');

const bodyParser = require('body-parser');
const express = require('express');
const axios = require('axios');


app.set('view engine', 'ejs');
app.set('views', "D:\\Naggaro Internship\\Jokes App\\views");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    axios.get("https://v2.jokeapi.dev/joke/Any?type=single")
    .then(function(response) {
        var data = response["data"];
        var joke = data["joke"];
        var id = data["id"];
        
        saveToDB(id, joke);

        res.render('pages/home', {id: id, joke: joke});
    });
});

app.post("/joke", (req, res) => {
    var id = parseInt(req.body.id);

    var searchQuery = `SELECT * FROM joketable WHERE id = ${id};`;

    con.query(searchQuery, (err, results) => {
        if(err)
            console.log(err);

        if(results.length != 0)
            res.render('pages/home', {id: results[0]["id"], joke: results[0]["joke"]});

        else {
            axios.get(`https://v2.jokeapi.dev/joke/Any?type=single&idRange=${id}-${id+1}`)
            .then(function(response) {
                var data = response["data"];
                var joke = data["joke"];
                
                saveToDB(id, joke);

                res.render('pages/home', {id: id, joke: joke});
            });
        }
    });
});


function saveToDB(id, joke) {
    console.log(id);
    console.log(joke + "\n");

    var searchQuery = `SELECT * FROM joketable WHERE id = ${id};`;

    con.query(searchQuery, (err, results) => {
        if(err)
            console.error(err);

        if(results.length == 0) {
            var formattedJoke = joke.replaceAll("'", "''").replaceAll('"', '\\"');

            var addQuery = `INSERT INTO joketable VALUES(${id}, "${formattedJoke}");`;

            con.query(addQuery, (err) => {
                if(err)
                    console.error(err);

                else
                    console.log(`Joke added id = ${id} \n`);
            });
        }
    });
}
