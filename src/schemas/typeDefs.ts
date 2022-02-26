import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Work {
    title: String!
    author: String!
  }

  type Query {
    works: [Work]
  }
`

export default typeDefs
