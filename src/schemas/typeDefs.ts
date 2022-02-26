import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Work {
    title: String!
    author: String!
  }

  type Query {
    works(title: String, author: String): [Work]
  }

  type Mutation {
    addWork(title: String!, author: String!): Boolean
  }
`

export default typeDefs
