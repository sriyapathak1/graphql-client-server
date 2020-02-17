"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = exports.resolvers = void 0;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _path = _interopRequireDefault(require("path"));

var _modules = require("./modules");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const typeArrays = (0, _mergeGraphqlSchemas.fileLoader)(_path.default.join(__dirname, './**/*.graphql'));
const typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)(typeArrays, {
  all: true
});
exports.typeDefs = typeDefs;
const resolvers = {
  Query: { ..._modules.UserQuery
  }
};
exports.resolvers = resolvers;