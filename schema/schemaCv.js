import sqlite3 from "sqlite3";

export const db = new sqlite3.Database("schema/db/cv.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  db.serialize(() => {
    db.run(
      "CREATE TABLE IF NOT EXISTS cv (id INTEGER PRIMARY KEY, fullName VARCHAR NOT NULL, age INTEGER NOT NULL, currentAddress VARCHAR NOT NULL, email VARCHAR UNIQUE NOT NULL, phone VARCHAR UNIQUE NOT NULL,job VARCHAR NOT NULL)",
      (err) => {
        if (err) {
          console.log(err);
          throw err;
        }
      }
    );
  });
});

