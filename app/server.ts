import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { connectToMongoDB, getDBUrl } from './database/dbConnectors';

import schema from './Schema';
import root from './Resolvers';

var app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
const server = app.listen(4000, async (): Promise<any> => {
  const port: string = (server.address() as Record<string, any>).port;
  console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);

  await connectToMongoDB(getDBUrl.mongodb());

});
