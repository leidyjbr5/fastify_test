import Organization from './../models/organizations.js'

async function getAllOrganizations() {
  return Organization.findAll()
}

async function createOrganizations(data) {
  return Organization.create(data)
}

export { getAllOrganizations, createOrganizations }
