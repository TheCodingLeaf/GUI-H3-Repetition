import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./Shop.db", (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to SQLite database.");
    }
});

function query(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

async function test() {
    try {
        const result = await query("SELECT 1 AS test");
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}

test();