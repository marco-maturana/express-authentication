import * as argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import UserModel, { User } from '../models/user';

export interface SignInArgs {
  email: string;
  password: string;
}

export async function encryptPassword(password: string): Promise<string> {
  return argon2.hash(password);
}

export function generateToken(user: User): string {
  if (process.env.JWT_SECRET == null)
    throw new Error('JWT_SECRET needs to be defined!');

  const { name, email, _id } = user;

  return jwt.sign({ name, email }, process.env.JWT_SECRET, {
    subject: _id.toHexString(),
  });
}

export async function signIn({
  email,
  password,
}: Readonly<SignInArgs>): Promise<User | null> {
  const user = await UserModel.findOne({ email }).lean();

  if (user != null) {
    if (await argon2.verify(user.password, password)) {
      return user;
    }
  }

  return null;
}
