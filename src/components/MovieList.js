import React from 'react'
import MovieCard from './MovieCard'
import '../css/MovieList.css'



const MovieList =({movies  , searchByName,searchByRate}) => {
    return (
<div>
<div className= 'movie-list'>
          {movies
          .filter((el) => el.title.toLowerCase().includes(searchByName.trim().toLowerCase())&& el.rate>=searchByRate)
          .map((movie, i) => (
         
              <MovieCard  key={i} movie={movie}/>
              
                        ))}
                        
</div>
</div>
    )
}


export default MovieList