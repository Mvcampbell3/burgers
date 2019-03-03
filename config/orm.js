const con = require("./connection")

module.exports = {
    all: function (tableName, cb) {
        let queryString = "SELECT * FROM ??";
        con.query(queryString, [tableName], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    create: function(tableName, name, cb) {
        let queryString = "INSERT INTO ?? (name) VALUES (?)";

        con.query(queryString, [tableName, name], function(err, data) {
            if (err) throw err;
            cb(data);
        })
    },

    delete: function(tableName, id, cb) {
        let queryString = "DELETE FROM ?? WHERE id = (?)";
        

        con.query(queryString, [tableName, id], (err,data) => {
            if (err) throw err;
            cb(data)
        })
    }, 

    change: function(tableName, val, id, cb) {
        console.log(val + " is val before");
        let querySting = "UPDATE ?? SET devoured = (?) WHERE id = (?)";
        console.log(querySting);
        if (val === "true") {
            var term = 1;
        } else {
            var term = 0;
        }
        console.log(term + " is val");
        con.query(querySting, [tableName, term, id], function(err, data) {
            if (err) throw err;
            cb(data);
        })
    }

    
}