import { createSchema } from 'graphql-yoga'
import { db } from './db'

const typeDefinitions = /* GraphQL */ `
  type Query {
    getAllDirectors: [Director!]!
    getAllMovies: [Movie!]!
    getDirector(id: ID!): Director
    getMovie(id: ID!): Movie
  }

  type Director {
    id: ID!
    name: String!
    movies: [Movie!]!
  }

  type Movie {
    id: ID!
    title: String!
    director: Director!
  }
`

const resolvers = {
  Query: {
    getAllDirectors: () => {
      return db.director.find()
    },
    getAllMovies: () => {
      return db.movie.find()
    },
    getDirector: (_: any, { id }: { id: number }) => {
      return db.director.findById(id)
    },
    getMovie: (_: any, { id }: { id: number }) => {
      return db.movie.findById(id)
    },
  },
  Director: {
    movies: (parent: {id: number}) => {
      return db.movie.findByDirectorId(parent.id)
    },
  },
  Movie: {
    director: (parent: {directorId: number}) => {
      return db.director.findById(parent.directorId)
    },
  },
}

export const schema = createSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})
