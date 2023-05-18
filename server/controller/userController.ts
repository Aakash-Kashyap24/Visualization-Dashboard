import { NextFunction, Request, Response } from 'express';
import userModel, { User } from '../model/userModel';
import asyncHandler from '../middleware/AsyncHandler';
import bodyParser from 'body-parser';
import ErrorHandler from '../utils/ErrorHandler';
import sendToken from '../utils/sendToken';

export const registerAdmin = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;

        // Create a userModel instance
        await userModel.create({ name, email, password });

        // Send response
        res.json('done');
    } catch (error) {
        // Handle any errors
        return next(new ErrorHandler(500, error));
    }
});

export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        // Find the user
        const user = await userModel.findOne({ email });

        if (!user) {
            return next(new ErrorHandler(500, "User Not Found"));
        }

        if (password != user.password) {
            return next(new ErrorHandler(401, "Wrong Credentials"));

        }
        // Send response
        sendToken(user, 200, res);
    } catch (error) {
        // Handle any errors
        return next(new ErrorHandler(500, error));
    }
});
