import React from 'react'

const MovieCard = ({movies}) => {
  return (
    <div className='container'>
         {movies.map((movie,index)=>(
          
          <div key={index} className="movie">
            <div>
              <p>{movie.Year}</p>
              </div>
              <div>
                <img src={movie.Poster} alt={movie.Title} />
              </div>
              <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
              </div>
          </div>
      


        ))}
    </div>
  )
}

export default MovieCard