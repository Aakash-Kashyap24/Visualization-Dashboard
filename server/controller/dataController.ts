import { NextFunction, Request, Response } from 'express';
import DataModel, { EnergyData } from '../model/DataModel';
import asyncHandler from '../middleware/AsyncHandler';
import { jsonData } from '../jsondata';
import ErrorHandler from '../utils/ErrorHandler';

export const createDataModel = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Create an array of promises to create DataModel instances
        const createPromises = jsonData.map(async (element) => {
            await DataModel.create({
                ...element,
            });
        });

        // Wait for all the promises to resolve
        await Promise.all(createPromises);

        // Send response
        res.json('done');
    } catch (error) {
        // Handle any errors
        return next(new ErrorHandler(500, error));
    }
});


export const getData = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {


    const data = await DataModel.find();

    res.status(200).json(data);

})
