import { useState } from 'react'
import { useEffect } from 'react'
import Watchlist from './components/Watchlist'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
// import Banner from './components/Banner'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import axios from "axios"
import './App.css'

function App() {
  const [movies,setMovies] = useState([]);
  const [pageNo ,setPageNo] = useState(1);
  const [watchlist , setWatchList] = useState([]);
  
  function handleAddtoWatchList(movieObj){
    const newAdded = [...watchlist , movieObj]
    console.log(newAdded)
    setWatchList(newAdded);
    localStorage.setItem("movieItem",JSON.stringify(newAdded))
  }
  function handleRemovefromWatchlist(movieObj){
    const newremoved = watchlist.filter(movie =>{
      
      return movieObj.id !== movie.id
    })
    localStorage.clear()
    localStorage.setItem("movieItem",JSON.stringify(newremoved))
    setWatchList(newremoved)
  }
useEffect(()=>{
  let GDFL = localStorage.getItem("movieItem")
  if(!GDFL){
    return
  }
  setWatchList(JSON.parse(GDFL))
},[])

  function prev(){
    if(pageNo<=1){
      return
    }
    setPageNo(pageNo -1)
  }
  
  function next(){
    setPageNo(pageNo  + 1);
  }
  useEffect(()=>{
    let api_key = //enter your api key here
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${pageNo}`).then(res => {
    setMovies(res.data.results)
  },[pageNo])
  })
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={
      <>
      
      <Movies watchlist={watchlist} handleAddtoWatchList={handleAddtoWatchList} handleRemovefromWatchlist={handleRemovefromWatchlist} movies={movies} pageNo={pageNo} prev={prev} next={next}/></>
      
    }/>
    <Route path='/watchlist' element={
      <Watchlist watchlist={watchlist} handleRemovefromWatchlist={handleRemovefromWatchlist}/>
    }/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
