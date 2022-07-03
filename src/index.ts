import 'dotenv/config';

import database from './config/database';
import router from './router';
import Server from './config/server';

async function main () {
  await database();

  const server = new Server();

  const port = Number(process.env.SERVER_PORT ?? '3000');

  server.config({ port, apiRouter: router });
  server.start();
}

main().catch(err => console.log(err));
