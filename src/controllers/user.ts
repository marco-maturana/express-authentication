import * as authentication from '../services/authentication';
import {Request, Response} from 'express';
import UserModel from '../models/user';

export async function signIn(req: Request, res: Response): Promise<Response> {
  const {email, password} = req.body;

  const user = await authentication.signIn({email, password});

  if (user == null) return res.status(401).json({error: 'Usuario ou senha inválida!'});

  const token = await authentication.generateToken(user);

  return res.json({
    name: user.name,
    email: user.email,
    token,
  })
}

export async function signUp(req: Request, res: Response): Promise<void> {
  const {body} = req;

  const password = await authentication.encryptPassword(body.password);

  await UserModel.create({...body, password});

  res.json({message: 'Usuário criado com sucesso!'});
}
