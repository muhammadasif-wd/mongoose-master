import { IUser } from "./user.interface"
import User from "./user.model"

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload)
    const response = await user.save()
    return response
}

export const getUserFromDB = async (): Promise<IUser[]> => {
    const users = await User.find()
    return users;
}