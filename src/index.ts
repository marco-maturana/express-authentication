import cors from 'cors';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.json({message: 'Hello World'});
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});