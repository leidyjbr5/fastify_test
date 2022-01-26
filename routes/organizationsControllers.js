import { getAllOrganizations, createOrganizations } from './../services/organizationsServices.js'

async function getAllController(request, reply) {
  const organizations = await getAllOrganizations()
  reply.send(organizations)
}

async function createController(request, reply) {
  const organization = await createOrganizations(request.body)
  reply.send(organization)
}

export { getAllController, createController }
