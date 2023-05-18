import app from './app';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config({
    path: "config/config.env"
})

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Server is working fine"
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`);
});
