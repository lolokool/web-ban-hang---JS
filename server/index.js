const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
const port = process.env.PORT || 8000;

const con = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "ngoclong1405",
  database: "productmanagement",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!!!");
});

// api
// app.route("/products", function (req, res) {
//   console.log("xxxx req", req);
//   console.log("xxxx req", res);
//   // res.send({
//   //   JSON.
//   // })
// });

app.listen(port);
console.log("Server started at http://localhost:" + port);
