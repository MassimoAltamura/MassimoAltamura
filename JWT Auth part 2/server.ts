import { login, signup } from "./users.js"

import express from 'express'
import "express-async-errors"
import morgan from 'morgan'
import multer from "multer"
import "./passaport.js"
import { getAll, getOneById, create, updateById, deleteById, createImage } from "./planets"
const app = express()
const port = 3000;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads")
  },
  filename(req, file, cb) {
    cb(null, file.originalname)
  },
})
const upload = multer({ storage })

app.use(morgan("dev"))
app.use(express.json())
app.use("/uploads", express.static("uploads"))
app.use("/static", express.static("static"))



app.post("/api/users/login", login)
app.post("/api/users/signup", signup)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
