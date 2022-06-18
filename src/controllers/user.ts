import * as argon2 from "argon2";
import {Request, Response} from 'express';
import UserModel from '../models/user';

export async function signUp(req: Request, res: Response): Promise<void> {
  const {body} = req;

  const password = await argon2.hash(body.password);

  await UserModel.create({...body, password});

  res.json({message: 'Usuário criado com sucesso!'});
}