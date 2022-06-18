import mongoose from 'mongoose';

export default async function database(connectionString: string) {
  await mongoose.connect(connectionString);
}