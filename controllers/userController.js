const db = require("../database/db.js");

class userController {
  constructor() {}

  insert(req, res) {
    const { name } = req.body;
    db.query("INSERT INTO users (NAME) VALUES (?)", [name], (err, row) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send({ message: row.insertId });
    });
  }

  view(req, res) {
    const { id } = req.params;
    db.query("SELECT * FROM users WHERE ID = ?", [id], (err, row) => {
      if (err) {
        res.status(500).send(row);
      }
      res.status(200).send(row);
    });
  }

  update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    db.query(
      "UPDATE users SET name = ? WHERE users.ID = ?",
      [name, id],
      (err, row) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).send(row);
      },
    );
  }

  delete(req, res) {
    const { id } = req.params;
    db.query("DELETE FROM users WHERE ID = ?", [id], (err, row) => {
      if (err) {
        res.status(500).send({ message: "Error" });
      }
      res.status(200).send({ message: "Sucess" });
    });
  }
}

module.exports = new userController();
