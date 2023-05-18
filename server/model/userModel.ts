import mongoose, { Schema, Document } from 'mongoose';
import jwt from "jsonwebtoken";

export interface User extends Document {
    name: string,
    email: string,
    password: string,
    role: string,
    getJWTToken(): string
}

const UserSchema: Schema = new Schema({
    name: { type: String, },
    password: { type: String, },
    email: { type: String, },
    role: { type: String, default: 'admin' },

});

UserSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, String(process.env.SECRET_KEY), {
        expiresIn: Number(process.env.JWT_EXPIRE) * 24 * 60 * 60 * 1000,
    });
};





const userModel = mongoose.model<User>('User', UserSchema);





export default userModel;
