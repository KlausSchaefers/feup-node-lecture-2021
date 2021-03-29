import {createConnection, getConnection} from 'typeorm';
import {Student} from "../src/entity/Student";

const connection = {
  async create(){
    await createConnection();
  },

  async close(){
    await getConnection().close();
  },

  async clear(){
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Student)
      .execute();


  },
};
export default connection;