import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { TaskResolver } from './modules/tasks/tasks-graphql-resolvers';
import { CLIENT_DOMAIN } from './shared/constants/environments';

export async function startServer(): Promise<Express> {
  const server = express();

  server.use(cors({ origin: CLIENT_DOMAIN }));
  server.use(morgan('dev'));
  server.use(express.json());
  server.get('/', (_, res) => res.status(200).send('working!'));

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TaskResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app: server, path: '/graphql' });

  return server;
}
