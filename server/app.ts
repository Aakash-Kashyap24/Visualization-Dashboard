import express from 'express';
import { dataRoutes } from './routes/dataRoutes';

const app=express()


app.use('/api/v1',dataRoutes)

export default app;


