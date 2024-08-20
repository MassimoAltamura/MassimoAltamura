/*const TODO: string = "start writing your Express API server here :)";

console.log(TODO);*/
 import express from 'express'
 import "express-async-errors"
 import morgan from 'morgan'
const app = express()
const port = 3000;
app.use(morgan("dev"))
app.use(express.json())
type Planet = {
    id:number;
    name:string;
}
type Planetsn= Planet[]
let planets=[
    {id:1, name:"mars"},
    {id:2, name:"eath"},
]
app.get('/api/planets', (req, res) => {
  res.status(200).json(planets)
})
app.get('/api/planets/:id', (req, res) => {
    const {id} = req.params;
    const planet = planets.find(p=>p.id === Number(id))
     res.status(200).json(planets)
  })
  app.post("/api/planets",(req,res)=>{
    const {id, name}=req.body
    const newPlanet = {id,name}
    planets = [...planets, newPlanet]
    console.log(planets)
    res.status(201).json({msg:"the planet was created"})
  })
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
