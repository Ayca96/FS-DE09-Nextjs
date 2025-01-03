import { getirMovies } from '@/helpers/movieFunctions'
import React from 'react'
import MovieCard from './MovieCard'


const MovieSection2 = async ({title,type}) => {
 const filmler= await getirMovies(type)
 //console.log(filmler);
 

  return (
 
    <div className='mb-4'>
      <p className="text-white  text-md lg:text-2xl font-semibold mb-4">
        {title}
      </p>
      <div className="grid grid-flow-col gap-2 overflow-x-scroll ">
        {filmler?.map((film)=>(
          <MovieCard key={film.id} {...film}/>
        ))}
      </div>
    </div>
  )
}

export default MovieSection2