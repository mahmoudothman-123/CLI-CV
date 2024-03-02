import { open as sqliteOpen } from "sqlite";
import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function openDb() {
  const db = await sqliteOpen({
    filename:path.join( __dirname,"db/cv.sqlite"),
    driver: sqlite3.Database,
  });
  await db.migrate({
    migrationsPath: path.join(__dirname,"db/migrations"),
  });
}
