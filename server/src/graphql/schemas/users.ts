import { gql } from 'apollo-server'

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    imageUrl: String
    createdAt: String!
    updatedAt: String
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    register(
      username: String!,
      email: String!,
      password: String!,
      confirmPassword: String!,
      imageUrl: String
    ): User!
  }
`;

export default typeDefs