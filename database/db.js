const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "application",
});

connection.connect((e) => {
  if (e) {
    throw e;
  }
  console.log("Connect BD");
});

module.exports = connection;
