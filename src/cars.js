import { dbConnect } from "./dbConnect.js";

export function getAllCars(req,res){
    // connect to db
    const db = dbConnect()
    // get all doc from cars collection
    db.collection('cars').get()
    .then(collection => {
        // reshape collection to arrray 
        const cars = collection.docs.map(doc => doc.data())
        // send array to response 
        res.send(cars)

    })
    .catch(err => handleError(err,res))
}

export function createCar(req, res){
    // get a new car from request body
    const newCar = req.body
    //connect to the database
    const db = dbConnect()
    // add that car to cars collection
    db.collection('cars').add(newCar)
    .then(doc => {
        res.status(201).send({
            success:true,
            id: doc.id
        })
    })
    .catch(err => handleError(err,res))
    //send back the new doc id 
}

export function updateCar(req, res){
    //select a car to update
    const { id } = req.params
    //connect to db
    const db = dbConnect()
    //update doc(id) in cars collection using req.bod
    const newcar = req.body
    db.collection('cars').doc(id).update(newcar)
    .then(doc => {
        res.status(201).send({
            success:true,
            id: doc.id
        })
    })
    .catch(err => handleError(err,res))
}

function handleError(err,res){
    console.error(err)
    res.status(500).send(err)
}

