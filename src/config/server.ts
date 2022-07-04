import cors from 'cors';
import express, { Express, Request, Response, Router } from 'express';
import helmet from 'helmet';

import passportConfig from './passport';

export interface ServerOptions {
  port: number;
  apiRouter: Router;
}

export default class Server {
  private readonly server: Express;
  private options: ServerOptions | undefined;

  constructor() {
    this.server = express();
  }

  config(options: Readonly<ServerOptions>) {
    this.options = options;
    const { apiRouter } = options;

    const passport = passportConfig();

    this.server.use(cors());
    this.server.use(helmet());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(passport.initialize());

    this.server.get('/', (_req: Request, res: Response) => {
      res.json({ message: 'Hello World' });
    });

    this.server.use('/api', apiRouter);
  }

  start() {
    if (this.options == null)
      throw new Error('The server needs to be configured!');

    const { port } = this.options;

    this.server.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    });
  }
}
