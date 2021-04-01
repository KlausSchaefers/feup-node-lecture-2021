import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors";

import StudentController from './controller/StudentController'
import {Request, Response} from "express";



export const VERSION = '1.0.0'

/**
 * This function configures the app. It does not start
 * the server, because it is also used in all the test cases.
 */
export async function createApp () {


  // create services and controllers
  let studentController = new StudentController('feup')

  // create express stuff
  const app = express();

  app.use(bodyParser.json({limit: '50mb'}))
  app.use(cors())

  const router = express.Router()


  router.get('/api/status.json', (req: Request, res: Response) => res.send({
    'status': 'running',
    'version': VERSION
  }));

  router.post('/api/students', (req: Request, res: Response) => studentController.create(req, res))
  router.get('/api/students', (req: Request, res: Response) => studentController.findAll(req, res))

  app.use(router)

  return app
}
