import { IUser } from "./user.interface"
import User from "./user.model"

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload) //? User --> class || user --> instance
    const response = await user.save() //? build in instance methods from mongoose
    return response
}
 


export const getUserFromDB = async (): Promise<IUser[]> => {
    const users = await User.find()
    return users;
}

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const users = await User.findOne({ id: payload })
    //* fill filtering
    // const users = await User.findOne({ id: payload }, { name: 1, contactNo:1 })
    return users;
}