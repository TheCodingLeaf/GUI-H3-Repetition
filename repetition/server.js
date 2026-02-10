import sqlite3 from 'sqlite3';
import express, { json } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, 'Shop.db');

const app = express();
app.use(cors());
app.use(json());

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to SQLite database at:", dbPath);
    }
});

app.get('/product', (req, res) => {
    db.all("SELECT * FROM Product", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            console.log("Rows returned:", rows);
            res.json(rows);
        }
    });
});

app.get('/tables', (req, res) => {
    db.all("SELECT name FROM sqlite_master WHERE type='table'", [], (err, rows) => {
        res.json(rows);
    });
});

app.get('/debug', (req, res) => {
    db.all("SELECT COUNT(*) as count FROM Product", [], (err, rows) => {
        if (err) {
            res.json({ error: err.message });
        } else {
            res.json({ rowCount: rows[0].count, allRows: "visit /product" });
        }
    });
});

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});