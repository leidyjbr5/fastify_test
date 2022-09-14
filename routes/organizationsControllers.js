import { pipeline } from 'stream'
import { promisify } from 'util'
import { getAllOrganizations, createOrganizations } from './../services/organizationsServices.js'
import { createWriteStream } from 'fs'
import { resolve } from 'path'
import { s3Client, bucketName } from './../services/s3Service.js'
import { PutObjectCommand } from '@aws-sdk/client-s3'

// Stolen from https://stackoverflow.com/a/67729663
function stream2buffer(stream) {
  return new Promise((resolve, reject) => {
    const _buf = []

    stream.on('data', (chunk) => _buf.push(chunk))
    stream.on('end', () => resolve(Buffer.concat(_buf)))
    stream.on('error', (err) => reject(err))
  })
}

const pump = promisify(pipeline)

async function getAllController(request, reply) {
  const organizations = await getAllOrganizations()
  reply.send(organizations)
}

async function createController(request, reply) {
  const data = await request.file()
  // local:
  const file = createWriteStream(`${new Date().getTime()}-${data.filename}`)
  console.log(file)
  await pump(data.file, file)
  // const fileName = `${new Date().getTime()}-${data.filename}`
  // const s3Response = await s3Client.send(
  //   new PutObjectCommand({
  //     Bucket: bucketName,
  //     Key: fileName,
  //     Body: await stream2buffer(data.file),
  //     ACL: 'public-read',
  //     ContentType: data.mimetype,
  //   }),
  // )

  // const used = process.memoryUsage();
  // for (let key in used) {
  //   console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
  // }
  // logo Path digitalOcean: `https://${bucketName}.nyc3.digitaloceanspaces.com/${fileName}`,
  const organization = await createOrganizations({
    name: data.fields.name.value,
    logoName: data.fieldname,
    logoPath: file.path
  })
  reply.send(organization)
}

export { getAllController, createController }
