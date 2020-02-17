import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import  { typeDefs, resolvers } from './index';
// improt { validateUser } from './utils/';
import validateUser from './utils/validation';

const app = express();


// app.use('/graphql', expressGraphQL  ({
//     graphiql: true,
//  }));
 
//  app.listen(2000,() => {
//     console.log('Hello yur port is 2000'); 
//  } )
export const server = new ApolloServer({
schema: makeExecutableSchema({typeDefs, resolvers}),

})
server.applyMiddleware({app});
export const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(2000, () => {
    console.log('port is here---------- ');
    
});

