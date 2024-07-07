import React, { useEffect } from 'react'
import { useState } from 'react'
import genre from '../utility/genre'

function Watchlist({watchlist,handleRemovefromWatchlist}) {
  const [search ,setSearch] = useState("");
  const [genres , setGenres] = useState(["All genres"]);
  const [currentGenre, setCurrentGenre] = useState("All genres");

  function sCurrentGenre (genre){
    setCurrentGenre(genre);
  }
  useEffect(()=>{
    const random = watchlist.map(obj =>{
      return genre[obj.genre_ids[0]];
    })
    const temp = new Set(random)
    setGenres(["All genres" , ...temp]);
  },[watchlist])
  
  function handleSearch(e){
    setSearch(e.target.value);
  }
  function sortIncreasing(){
    watchlist.sort((A,B)=>{
      return A.popularity - B.popularity
    })
  }
  function sortDecreasing(){
    watchlist.sort((A,B)=>{
      return B.popularity - A.popularity
    })
    
  }
  return (
    <div className='watchlist-container'>
      <div className="genre-container" style={{display:"flex" , alignItems:"center" , justifyContent:"center" ,flexWrap:"wrap"}}>
        {genres.map((movieGenre)=>{
          return <div onClick={()=> sCurrentGenre(movieGenre)} className="genre" style={movieGenre == currentGenre?{backgroundColor:"blue"}:{backgroundColor:"gray"}}>{movieGenre}</div>
        })}
        
        {/* <div className="genre" style={}>action</div> */}
        
      </div>
      <input value={search} onChange={e => handleSearch(e)} className='input-search' type="text" placeholder='enter here to search for movies'/>
      <table style={{ width:"100%", margin:"1rem 0", fontSize:"10px"}}>
        <thead style={{fontSize:'2.1em'}}>
          <tr>
            <th>image</th>
            <th>name</th>
            <th style={{display:"flex", alignItems:"center" , justifyContent: "center",gap: "5px"}}><div style={{cursor:"pointer"}} onClick={sortDecreasing}>&uarr;</div>rating<div style={{cursor:"pointer"}} onClick={sortIncreasing}> &darr;</div></th>
            <th>popularity</th>
            <th>genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

        {watchlist.filter(movieObj => {
          if(currentGenre == "All genres"){
            return true
          }
          else{
            return genre[movieObj.genre_ids[0]] == currentGenre
          }
        }).filter(movieObj =>{
          return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
        }).map(movie =>(
          <tr key={movie.id}>
            <td>
            <img className='tr-image' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" /></td><td><h2 className='tr-name'>{movie.title}</h2></td>
            <td>
            {movie.vote_average}
            </td>
            <td>{movie.popularity}</td>
            <td>{genre[movie.genre_ids[0]]}</td>
            <td  style={{color:"red" , cursor:"pointer"}} onClick={()=>handleRemovefromWatchlist(movie)}>delete</td>
          </tr>

        ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default Watchlist