import mongoose from 'mongoose';

export default async function database() {
  const connectionString = process.env.DB_MONGO_CONNECTION_STRING;

  if (connectionString == null)
    throw new Error('String de conexão do banco de dados não configurada!');

  await mongoose.connect(connectionString);
}
