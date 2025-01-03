import React from 'react'
import MovieSection from './components/MovieSection2';
import MovieSection1 from './components/MovieSection1';
import MovieSection2 from './components/MovieSection2';

const Movies = () => {
  return (
 
    <div>
      {/* <MovieSection1/> */}
      <MovieSection2 title="TOP_RATED" type="top_rated"/>
      <MovieSection2 title="UPCOMING" type="upcoming"/>
      <MovieSection2 title="NOW_PLAYING" type="now_playing"/>
      <MovieSection2 title="POPULAR" type="popular"/>
    </div>
  )
}

export default Movies;