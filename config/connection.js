const mysql = require("mysql");

const con = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "surfboard",
    database: "burgers_db"
});

con.connect((err) => {
    if (err) throw err;
    console.log("connected");
});

module.exports = con;