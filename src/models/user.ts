import { Schema, model, ObjectId } from 'mongoose';

interface User {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = model<User>('User', userSchema);

export default UserModel;