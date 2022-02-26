import express from 'express'
import type { Express } from 'express'
import { createServer } from 'http'
import type { Server } from 'http'
import { ApolloServer, ExpressContext } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { typeDefs, resolvers } from './schemas'

const app: Express = express()
const httpServer: Server = createServer(app)

const server = new ApolloServer<ExpressContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

export { app, httpServer, server }
