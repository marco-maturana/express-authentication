import database from './config/database';
import Server from './config/server';

async function main() {

  await database('mongodb://localhost:27017/express-authentication');

  const server = new Server();

  server.config({port: 3000);
  server.start();
}

main().catch(err => console.log(err));
