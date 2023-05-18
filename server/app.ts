import express from 'express';
import { dataRoutes } from './routes/dataRoutes';
import { userRoutes } from './routes/userRoutes';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import errorMiddleware from './middleware/error';


dotenv.config({
    path: "config/config.env"
})
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/api/v1', dataRoutes)
app.use('/api/v1', userRoutes)

app.use(errorMiddleware);

export default app;


