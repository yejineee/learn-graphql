import { createServer } from 'node:http'
import { createYoga, createSchema } from 'graphql-yoga'
import { resolvers, typeDefinitions } from './schema'

 
function main() {
  const schema = createSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})
  const yoga = createYoga({ schema })
  const server = createServer(yoga)
  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}

main()
