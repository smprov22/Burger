var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.nextTick.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  })
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

// Export connection for our ORM to use.
module.exports = connection;
