import { Response } from "express";
import { User } from "../model/userModel";

const sendToken = (user: User, statusCode: number, res: Response) => {
    const token = user.getJWTToken();

    // options for cookie
    const options = {
        expires: new Date(
            Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token,
    });
};

export default sendToken;
