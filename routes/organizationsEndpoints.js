import { createController, getAllController } from './organizationsControllers.js'

function generateRoutes(server) {
  server.get('/organizations', getAllController)
  server.post('/organizations', createController)
}

export default generateRoutes
