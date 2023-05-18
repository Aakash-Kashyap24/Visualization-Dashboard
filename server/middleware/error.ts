import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler.js";

const errorMiddleware = (err:any, req:Request, res:Response, next:NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Problem";


    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default errorMiddleware;