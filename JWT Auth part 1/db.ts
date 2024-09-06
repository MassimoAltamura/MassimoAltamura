import pgPromise from "pg-promise";
const db = pgPromise()("prostgres://postgres:prostgres@localhost:5432/video")
console.log(db)
const setupDb = async () => {
   await db.none(`
     
      DRIP TABLE IP EXISTS users;
      CREATE TABLE users (
      id SERIAL NOT NULL PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      token TEXT ,
      )
      `)

   await db.none(`INSERT INTO users (username, password) VALUES ('dunny','dunny')`)

}
setupDb()
export { db }