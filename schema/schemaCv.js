import { open as sqliteOpen } from "sqlite";
import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const db = new sqlite3.Database;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function openDb() {
  const db = await sqliteOpen({
    filename: path.join(__dirname, "db/cv.sqlite"),
    driver: sqlite3.Database,
  });
  await db.migrate({
    migrationsPath: path.join(__dirname, "db/migrations"),
  });
}

function listCv() {
  const listCv = db.all(`SELECT * FROM addCv`);
  return console.table(listCv);
}

async function addCv(cv) {
  await db.run(
    "INSERT INTO addCV () VALUES(?,?,?,?,?,?,?)",
    [cv.id,
    cv.fullName,  
    cv.age,
    cv.currentAddress,
    cv.email,
    cv.phone,
    cv.job
    ],
  (err)=>{
    if(err) return console.error(err.message);
    console.log('Add new cv has been created');
  }
  );
}

export default { openDb, listCv, addCv };
