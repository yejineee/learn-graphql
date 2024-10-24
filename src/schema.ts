import { db } from './db'
import { Resolvers } from './generated/graphql'
export const typeDefinitions = /* GraphQL */ `
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

export const resolvers: Resolvers = {
  Query: {
    getAllDirectors: () => {
      return db.director.find()
    },
    getAllMovies: () => {
      return db.movie.find()
    },
    getDirector: (_: any, { id }) => {
      return db.director.findById(id)
    },
    getMovie: (_: any, { id }) => {
      return db.movie.findById(id)
    },
  },
  Director: {
    movies: (parent) => {
      return db.movie.findByDirectorId(parent.id)
    },
  },
  Movie: {
    director: (parent) => {
      return db.director.findById(parent.directorId)
    },
  },
}
