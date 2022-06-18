import database from './config/database';
import router from './router';
import Server from './config/server';

async function main() {

  await database('mongodb://localhost:27017/express-authentication');

  const server = new Server();

  server.config({port: 3000, apiRouter: router});
  server.start();
}

main().catch(err => console.log(err));
