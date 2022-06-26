import React, {useContext} from 'react'
import './MovieCard.css'
import {PopupContext, setMovieDetailsContent} from '../App.js'
import {openWindow} from '../PopupWindow/PopupWindow.js'
import MovieDetailsMenu from '../MovieDetailsMenu/MovieDetailsMenu'

function openMovieDetails(setter, contents, list, listSetter) {
  openWindow(setter)
  setMovieDetailsContent(<MovieDetailsMenu content = {contents} list = {list} listSetter = {listSetter} listIndex = {list.contents.indexOf(contents)}/>)
}

export default function MovieCard({content, currentList, currentListSetter}) {

  let display = useContext(PopupContext).movieDetailsWindow

  let poster = {
    backgroundImage: "url(" + content.poster + ")"
  }

  return (
    <div className ="movie-card" onClick = {() => openMovieDetails(display[1], content, currentList, currentListSetter)}>
      <div className = "movie-poster" style = {poster}></div>
      <div className = "movie-description">
        <h4>
          {content.title}
        </h4>
        <b>Rating: {content.rating}</b>
      </div>
    </div>
  )
}
