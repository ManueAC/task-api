import mongoose, { Mongoose } from 'mongoose';
import { MONGOOSE_URL } from './shared/constants/environments';

export async function connectDatabase(): Promise<Mongoose> {
  const database = await mongoose.connect(MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('database is connected');
  return database;
}
