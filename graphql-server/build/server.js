"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpServer = exports.server = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _index = require("./index");

var _validation = _interopRequireDefault(require("./utils/validation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// improt { validateUser } from './utils/';
const app = (0, _express.default)(); // app.use('/graphql', expressGraphQL  ({
//     graphiql: true,
//  }));
//  app.listen(2000,() => {
//     console.log('Hello yur port is 2000'); 
//  } )

const server = new _apolloServerExpress.ApolloServer({
  schema: (0, _apolloServerExpress.makeExecutableSchema)({
    typeDefs: _index.typeDefs,
    resolvers: _index.resolvers
  })
});
exports.server = server;
server.applyMiddleware({
  app
});

const httpServer = _http.default.createServer(app);

exports.httpServer = httpServer;
server.installSubscriptionHandlers(httpServer);
httpServer.listen(2000, () => {
  console.log('port is here---------- ');
});