const fastify = require('fastify')({logger: true})
const path = require('node:path')

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', 
})

fastify.get('/', function (req, reply) {
  reply.sendFile('index.html') 
})

// Run the server!
fastify.listen({ port: process.env.PORT }, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})
