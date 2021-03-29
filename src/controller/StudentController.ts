import {Request, Response} from "express";

import {getRepository} from "typeorm";
import {Student} from "../entity/Student";

export default class StudentController {

  async create (req: Request, res: Response) {
    console.debug('StudentController.create()')
    try {
      let body = req.body
      const result = await getRepository(Student).save(body)
      res.send(result)
    } catch (error) {
      res.status(500).send()
    }
  }

  async findAll (req: Request, res: Response) {
      let students = await getRepository(Student).find()
      res.send(students)
  }
}