
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

test("GET /api/status.json", async done => {
  let app = await createApp()
  request(app)
  .get('/api/status.json')
  .expect(200, {
    'status': 'running',
    'version': '1.0.0'
  }, done);
})

