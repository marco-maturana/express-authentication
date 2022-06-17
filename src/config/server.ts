import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';

export interface ServerOptions {
  port: number;
}

export default class Server {
  private readonly server: Express;
  private options: ServerOptions | undefined;

  constructor() {
    this.server = express();
  }

  config(options: Readonly<ServerOptions>) {
    this.options = options;

    this.server.use(cors());
    this.server.use(helmet());

    this.server.get('/', (_req: Request, res: Response) => {
      res.json({message: 'Hello World'});
    });
  }

  start() {
    if (this.options == null) throw new Error('The server needs to be configured!')

    const {port} = this.options;

    this.server.listen(port, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
  }
}
