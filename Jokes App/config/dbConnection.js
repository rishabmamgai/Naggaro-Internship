require('dotenv').config({ path: 'D:\\Naggaro Internship\\Jokes App\\config\\.env' });

const mysql = require('mysql2');

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

con.connect(function(err) {
    if(err)
        throw err;

    else {
        console.log(`Database : MySql connected at port ${process.env.DB_PORT} \n`);

        var checkTable = "SELECT * FROM information_schema.tables WHERE table_schema = 'testdb' AND table_name = 'joketable' LIMIT 1";

        con.query(checkTable, (err, results) => {
            if(err)
                console.log(err);

            if(results.length == 0) {
                var createTableQuery = "CREATE TABLE joketable(id int, joke VARCHAR(300))";

                con.query(createTableQuery, (err) => {
                    if(err)
                        console.log(err);

                    else
                        console.log("Joke Table created as joketable \n");
                });
            }
        });
    }
});

module.exports = con;
