import express from 'express';
import { createDataModel, getData } from '../controller/dataController';

const router=express.Router();

router.get('/createData',createDataModel);
router.get('/getData', getData);



export const dataRoutes=router;
