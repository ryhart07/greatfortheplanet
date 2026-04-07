const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./database.db");

app.get("/users", (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
      if (err) {
          console.log(err);
          return res.status(500).json({ error: "Failed to retrieve users" });
      }
      
      res.json(rows);
    });
});

app.post("/users", (req, res) => {
    const { email, password } = req.body;
    db.run("INSERT INTO users (email, password) VALUES (?, ?)", 
      [email, password], function(err) {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Failed to create user" });
        }

        res.json({ id: this.lastID });
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});