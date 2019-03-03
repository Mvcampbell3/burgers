const orm = require("../config/orm")

const burger = {
    all: function(cb) {
        orm.all("burgers", (res) => {
            cb(res);
        })
    },

    create: function(name, cb) {
        orm.create("burgers", name, function(res) {
            cb(res);
        })
    },

    delete: function(id, cb) {
        orm.delete("burgers", id, function(res) {
            cb(res);
        })
    },

    change: function(val, id, cb) {
        orm.change("burgers", val, id, function(result){
            cb(result);
        }) 
    }
}

module.exports = burger;