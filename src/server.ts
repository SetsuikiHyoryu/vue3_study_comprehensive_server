import type { Server } from 'http'
import { app, httpServer, server } from './app'

const PORT = 9491

const startApolloServer = async (): Promise<void> => {
  await server.start()

  server.applyMiddleware({ app })

  await new Promise(
    (resolve): Server => httpServer.listen({ port: PORT }, resolve as () => void)
  )

  console.log(`您的服务已启动至 ${PORT} 端口`)
}

startApolloServer()
