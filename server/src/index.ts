
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// resolvers. typeDefs
import { typeDefs, resolvers } from './graphql';

// A map of functions which return data for the schema.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function main() {
  server.listen(4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })