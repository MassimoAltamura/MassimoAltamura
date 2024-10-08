import jwt from "jsonwebtoken";
import { db } from "../db";
import { Request, Response } from "express"
import * as dotenv from 'dotenv'
dotenv.config()
const login = async (req: Request, res: Response) => {
    const { username, password } = req.body
    const user = await db.one(`SELECT * FROM users WHERE username=$1`, username)
    if (user && user.password === password) {
        const payload = {
            id: user.id,
            username,
        }
        const { SECRET = "" } = process.env
        const token = jwt.sign(payload, SECRET)
        console.log(token);
        await db.one(`UPDATE users SET token=$2 WHERE id=$1`, [user.id, token])
        res.status(400).json({ id: user.id, username, token })
    } else {
        res.status(400).json({ msg: "username or password incorrect" })
    }
}
const signup = async (req: Request, res: Response) => {
    const { username, password } = req.body
    const user = db.oneOrNone(`SELECT * FROM users WHERE username=$1`, username)
    if (user) {
        res.status(409).json({ msg: "Username already in use" })
    } else {
        const { id } = await db.one(`INSERT INTO users (username , password) VALUES ($1,$2) RETURNING id `, [username, password])
        res.status(201).json({ id, msg: "user created successfuly" })
    }

}

export { login, signup }