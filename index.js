import express from "express";
import { createCar, getAllCars, updateCar } from "./src/cars.js";

const app = express()
const PORT = 3002
app.use(express.json())

//put our routes here
app.get('/cars', getAllCars)
app.post('/cars', createCar)
app.put('/cars/:id', updateCar)

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}/...`)
})