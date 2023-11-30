import express, { Application } from "express";
import cors from "cors";

//? call express
const app: Application = express()


//? Application Router
import userRoutes from "./app/modules/user/user.route"


//? using cors
app.use(cors())

//? parse data 
app.use(express.json()) //json data
app.use(express.urlencoded({ extended: true })) //accept data url or json

/*
    * Step for data crud operation
    - 1st Step: Interface Create
    - 2nd Step: Schema Create
    - 3rd Step: Model Create
    - 4th Step: Database Query
*/
/*
    * Pattern for operation
    - Route Call To Controller
    - Controller Call To Service
    - Service Call To Model
    - Model Call To Schema
*/

//? Calling Routes
app.use("/api/v1/user", userRoutes)

export default app