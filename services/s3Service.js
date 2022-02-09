import { S3, ListBucketsCommand, CreateBucketCommand, ListObjectsCommand } from '@aws-sdk/client-s3'

const bucketName = 'test-fastify'

const s3Client = new S3({
  endpoint: 'https://nyc3.digitaloceanspaces.com',
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'xxxxxxxxxxxxxxxxxxxx',
    secretAccessKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
})

// console.log(await s3Client.send(new ListObjectsCommand({ Bucket: bucketName })))
// const data = await s3Client.send(new CreateBucketCommand({ Bucket: bucketName }))
// console.log('Success', data.Location)
// const data = await s3Client.send(new ListBucketsCommand({}))
// console.log('Success', data.Buckets)

export { s3Client, bucketName }
