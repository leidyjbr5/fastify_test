import fastify from 'fastify'
import generateRoutesOrganizations from './routes/organizationsEndpoints.js'
import fastifyIO from "fastify-socket.io";

const server = fastify({
  logger: { level: 'info' },
  ignoreTrailingSlash: true,
})

server.get('/ok', (request, reply) => {
  reply.status(204).send()
})

generateRoutesOrganizations(server)
server.register(fastifyIO);

const start = async () => {
  try {
    await server.ready()
    server.io.on("connection", (socket) => {
      socket.on("example", (message) => {
        console.log(message)
      })
    })
    await server.listen(8000, '0.0.0.0')
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

server.get("/socket", (req, reply) => {
  if (server.io.emit('hello', "hello")){
    reply.send('Ok')
  } else{
    reply.code(404)
  }
})

start()
