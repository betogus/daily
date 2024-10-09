import mongoose, { Document } from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    name: string;
}

const collection = "Users";

const UserSchema = new mongoose.Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
});

export const users = mongoose.model<IUser>(collection, UserSchema);
