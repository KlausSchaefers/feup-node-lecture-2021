
import {createApp} from '../src/app'
import request from 'supertest'
import connection from './ConnectionUtil';

beforeAll(async ()=>{
  await connection.create();
});

afterAll(async ()=>{
  await connection.close();
});

beforeEach(async () => {
  await connection.clear();
});

test("Student CRUD", async done => {

  let app = await createApp()

  // list is empty
  let response: any = await request(app)
    .get('/api/students')
    .expect(200)
  let emptyList = response.body
  expect(emptyList).not.toBeUndefined()
  expect(emptyList.length).toBe(0)

  // create a student
  let response2 : any = await request(app)
    .post('/api/students')
    .send({
      name: 'Pedro',
      lastname: 'Sousa',
      email: 'ps@feup.pt'
    })
    .expect(200);
  let student: any = response2.body
  expect(student).not.toBeUndefined()
  expect(student.id).not.toBeUndefined()

  // now the student shiuld be there
  let response3: any = await request(app)
    .get('/api/students')
    .expect(200)
  let oneStudentList = response3.body
  expect(oneStudentList).not.toBeUndefined()
  expect(oneStudentList.length).toBe(1)


  done()

})

