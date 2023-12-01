import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserByIdFromDB, getUserFromDB } from "./user.service";

export const createUser = (async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body
        const data = await createUserToDB(user)
        res.status(200).json({
            status: "success",
            message: "Successfully create a user.✅",
            data: data
        })
    } catch (err) {
        res.status(500).json({
            status: "false",
            message: err
        })
    }
})

export const getUser = (async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await getUserFromDB()
        res.status(200).json({
            status: "success",
            message: "Successfully get users.✅",
            data: data
        })
    } catch (err) {
        res.status(500).json({
            status: "false",
            message: err
        })
    }
})


export const getUserById = (async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const data = await getUserByIdFromDB(id)
        res.status(200).json({
            status: "success",
            message: "Successfully get user.✅",
            data: data
        })
    } catch (err) {
        res.status(500).json({
            status: "false",
            message: err
        })
    }
})