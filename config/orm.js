var connection = require("../config/connection.js");

var orm= {
    selectAll: function(table, cb) {
        //var arr = [];
        var  queryString = "SELECT * FROM "+table +";";
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
    },

    insertOne: function(table, cols, vals,cb) {
        var queryString = "INSERT INTO " +table;
        
    },

    updateOne: function() {

    }
};

module.exports = orm;