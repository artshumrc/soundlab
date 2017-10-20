/* eslint-disable */

import { makeExecutableSchema } from 'graphql-tools';

import * as settings from '../settings';
import WordExpressDefinitions from './definitions';
import WordExpressDatabase from './db';
import WordExpressResolvers from './resolvers';

// returns WordExpressDatabase object that has provides connectors to the database
const Database = new WordExpressDatabase(settings);
const Connectors = Database.connectors;

// Reolving functions that use the database connections to resolve GraphQL queries
const Resolvers = WordExpressResolvers(Connectors, settings.publicSettings);

// GraphQL schema definitions
const Definitions = WordExpressDefinitions;

const executableSchema = makeExecutableSchema({
  typeDefs: Definitions,
  resolvers: Resolvers
});

export { Connectors, Resolvers, Definitions, executableSchema };
