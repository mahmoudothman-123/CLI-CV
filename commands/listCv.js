import { db } from "../schema/schemaCv.js";

export default async function listCv() {
  db.all("SELECT * FROM cv", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.table(data);
    }
  });
}
