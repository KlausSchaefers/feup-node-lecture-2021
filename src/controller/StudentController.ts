import {Request, Response} from "express";

import {getRepository} from "typeorm";
import {Student} from "../entity/Student";

export default class StudentController {

  domain: string = 'Default'

  constructor (key: string) {
    this.domain = key

    type status = 'learning' | 'sleeping' | 'eating'
  }

  async create (req: Request, res: Response) {
    try {
      let body = req.body
      body.domain = this.domain
      const result = await getRepository(Student).save(body)
      res.send(result)
    } catch (error) {
      res.status(500).send()
    }
  }

  async findAll (req: Request, res: Response) {
      let students = await getRepository(Student).find({domain: this.domain})
      res.send(students)
  }
}