import React from 'react'
import Moviecard from './Moviecard'
// import { useState } from 'react'
function Movies({watchlist,movies,prev,next ,pageNo,handleAddtoWatchList,handleRemovefromWatchlist}) {
  
  return (
    <>
    
    <div className='banner-container' style={{ backgroundImage: movies[1] ? `url(https://image.tmdb.org/t/p/original${movies[0].backdrop_path})` : 'none' }}>
        
          {movies[0]?
            <div className="banner-container-heading">{movies[0].title}</div>: <div className="banner-container-heading">title</div>
  }
        
      </div>
    <div className='movies-container'>
      {movies.map(movieObj => {
        return <Moviecard watchlist={watchlist} key={movieObj.id} movieObj={movieObj} handleAddtoWatchList={handleAddtoWatchList} handleRemovefromWatchlist={handleRemovefromWatchlist}/>
      })}
      
    </div>
    <div className="pagination-div">
      <div className="decrease" onClick={prev}>-</div>
      <div className="count">{pageNo}</div>
      <div className="increase" onClick={next}>+</div>
    </div>
    </>
  )
}

export default Movies