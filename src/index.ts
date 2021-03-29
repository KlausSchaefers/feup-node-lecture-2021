
import "reflect-metadata";
import {createApp, VERSION} from './app'
import {createConnection} from 'typeorm';


async function init() {

  await createConnection();

  let app = await createApp()
  const PORT = 8083;

  app.listen(PORT, () => {
    console.log(`Server ${VERSION} is running at http://localhost:${PORT}`);
  });
}

init()