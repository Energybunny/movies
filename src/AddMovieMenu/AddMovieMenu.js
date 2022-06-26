import React,{useRef, useState} from 'react'
import '../Colours.css'
import './AddMovieMenu.css'
import '../Buttons.css'
import axios from 'axios'

let selectedMovie = null
const selectedHightlight = "0px 0px 5px 4px white"
let movieResults = []

function selectMovie(movie) {
  if(selectedMovie != null) document.getElementById(selectedMovie).style.boxShadow = ""
  selectedMovie = movie
  if(movie!=null)document.getElementById(selectedMovie).style.boxShadow = selectedHightlight
}

function search(input, setter) {
  selectedMovie = null
  let searchTerm = input.current.value
  let tempResults = []
  axios.get('https://api.themoviedb.org/3/search/movie?api_key=1792246f2d8a3a9dfa6868c1a215e91b&query=' + searchTerm.replaceAll(" ", "+"))
  .then(res => {    
    let max = 20;
    if(res.data.results.length < max) max = res.data.results.length
    let backImgTemplate = "url(https://image.tmdb.org/t/p/w500"
    let backImg
    movieResults = []
    for(let i = 0; i < max; i++) {
      if(res.data.results[i].poster_path == null) continue
      movieResults[i] = createMovieObject(res.data.results[i])
      backImg = backImgTemplate + res.data.results[i].poster_path + ")"
      tempResults.push(
        <div 
          key={i} 
          id={i} 
          className='movie-search-result' 
          onClick={() => selectMovie(i)} 
          style={{backgroundImage: backImg}}></div>
      )
    }
    setter(tempResults)
  })
  .catch(err => {
    alert(err)
  })
}

function createMovieObject(movie) {
  return {
    poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path, 
    title: movie.title, 
    rating: movie.vote_average, 
    description: movie.overview,
    release: movie.release_date
  }
}

function addToList(list, setter) {
  if(selectedMovie == null) return
  let newList = {...list}
  newList.contents.push(movieResults[selectedMovie])
  setter(newList)
  selectMovie(null)
}

export default function ({currentList, listSetter}) {
  
  let userInput = useRef()

  const [results, setResults] = useState([])
  return (
    <>
      <span>
        <h3>Add a new film to "<i>{currentList.name}</i>"</h3>
        <span>
        <input className='movie-search-bar' type="text" ref = {userInput}></input>
        <span className = "material-icons movie-search-bar search-button" onClick={() => search(userInput, setResults)}>
          search
        </span>
        </span>
        <div className ="add-to-list-button button" onClick={() => addToList(currentList, listSetter)}>
          Add to list
        </div>
        <div className ="movie-search-result-container">
          {results}
          <div className='emptyBar'></div>
        </div>
      </span>
    </>
  )
}
