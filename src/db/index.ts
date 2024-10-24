import { DIRECTOR } from "./director"
import { MOVIE } from "./movie"


export const db = {
  director: {
    find() {
      console.log('db.director.find')
      return Object.values(DIRECTOR)
    },
    findById(id: string) {
      console.log('db.director.findById', id)
      return DIRECTOR[+id as keyof typeof DIRECTOR]
    },
  },
  movie: {
    find() {
      console.log('db.movie.find')
      return Object.values(MOVIE)
    },
    findById(id: string) {
      console.log('db.movie.findById', id)
      return MOVIE[+id as keyof typeof MOVIE]
    },
    findByDirectorId(directorId: string) {
      console.log('db.movie.findByDirectorId', directorId)
      return Object.values(MOVIE).filter((movie) => movie.directorId === +directorId)
    },
  },
}
