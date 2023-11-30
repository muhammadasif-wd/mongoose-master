import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// * Creating Schema using IUser interface
const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    name: {
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    dateOfBirth: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
    },
    email: {
        type: String,
    },
    contactNo: {
        type: Number,
        required: true,
    },
    emergencyContactNo: {
        type: Number,
        required: true,
    },
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
})

//* Create a Model.
const User = model<IUser>('User', userSchema);
export default User;