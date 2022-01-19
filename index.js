import fastify from 'fastify'


const server = fastify({
  logger: { level: 'info' },
  ignoreTrailingSlash: true,
})


server.get('/ok', (request, reply) => {
  reply.status(204).send()
})

const start = async () => {
  try {
    await server.listen(8000, '0.0.0.0')
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
