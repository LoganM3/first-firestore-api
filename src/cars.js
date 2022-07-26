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
    .catch(err => res.status(500).send(err))
}
