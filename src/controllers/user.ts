import {Request, Response} from 'express';

export async function findAll(req: Request, res: Response): Promise<void> {
  res.json({users: []});
}