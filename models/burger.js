var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("cats", cols, vals, function(res) {
            cb(res);
        })
    },

    // updateOne: function() {

    // }
}

module.exports = burger;