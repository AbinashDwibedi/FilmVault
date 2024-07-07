import React from 'react';

function Moviecard({watchlist, movieObj, handleAddtoWatchList, handleRemovefromWatchlist}) {
  const isMovieInWatchlist = (movieObj) => {
    return watchlist.some(movie => movie.id === movieObj.id);
  }

  return (
    <div className='movie-container' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.poster_path})`}}>
      {isMovieInWatchlist(movieObj) ? (
        <div className="AddRemoveIcon" onClick={() => handleRemovefromWatchlist(movieObj)}>&#10060;</div>
      ) : (
        <div className="AddRemoveIcon" onClick={() => handleAddtoWatchList(movieObj)}>&#128525;</div>
      )}
      <h2 className="movie-container-heading">{movieObj.title}</h2>
    </div>
  );
}

export default Moviecard;
