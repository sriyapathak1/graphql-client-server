import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import { UserMutation, UserQuery } from './modules';

const typeArrays = fileLoader(path.join(__dirname,'./**/*.graphql'));
const typeDefs = mergeTypes(typeArrays, {all:true});

const resolvers = {
    Query: {
        ...UserQuery
    },
}
export{
    resolvers,
    typeDefs,
}