require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: true,
  },
});

app.use(bodyParser.json());
connection.connect();

app.get("/", (req, res) => {
  res.send("API is runnings");
});

app.get("/users", (_, res) => {
  const query = "SELECT * FROM users";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error retrieving data:", err);
      res.status(500).json(err);
      return;
    }
    res.json(results);
  });
});

app.post("/users", (req, res) => {
  const { name, lastName } = req.body;
  const query = "INSERT INTO users (name, last_name) VALUES (?, ?)";
  connection.query(query, [name, lastName], (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).json(err);
      return;
    }
    res.status(201).json(results.insertId);
  });
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;