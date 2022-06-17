import Server from './config/server';

const server = new Server();

server.config({port: 3000});
server.start();