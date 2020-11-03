import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';

const PORT = process.env.PORT || 3000;

const app = express();

app.use('*', cors());
app.use(compression());
// app.use('/', graphqlHTTP({ schema, graphiql: true }));

const server = new ApolloServer({ schema, introspection: true });
server.applyMiddleware({ app });

const httpServer = createServer(app);
httpServer.listen(PORT, () => {
    console.log(`Corriendo correctamente en http://localhost:${PORT}/graphql`);
})