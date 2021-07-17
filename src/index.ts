import 'reflect-metadata';
import { connectDatabase } from './database';
import { startServer } from './server';
import { PORT } from './shared/constants/environments';

async function main(): Promise<void> {
  const server = await startServer();
  await connectDatabase();

  server.listen(PORT, () => console.log('server on port ', PORT));
}

main();
