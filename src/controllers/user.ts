import * as authentication from '../services/authentication';
import {Request, Response} from 'express';
import UserModel from '../models/user';

export async function signUp(req: Request, res: Response): Promise<void> {
  const {body} = req;

  const password = await authentication.encryptPassword(body.password);

  await UserModel.create({...body, password});

  res.json({message: 'Usuário criado com sucesso!'});
}