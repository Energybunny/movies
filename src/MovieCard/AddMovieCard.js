import React,{useState, useContext, useEffect} from 'react'
import './MovieCard.css'

import {PopupContext} from '../App.js'
import {openWindow} from '../PopupWindow/PopupWindow.js'

function openAddMovieMenu(setter) {
    openWindow(setter)
}

export default function AddMovieCard({currentList}) {

  let [displayStyle, setDisplayStyle] = useState("none")
  let display = useContext(PopupContext).addMovieWindow

  useEffect(() => {
    setDisplayStyle("block")
    if(currentList.name === "§--empty") setDisplayStyle("none")  
  }, [currentList])

  return (
    <div className='movie-card add-card material-icons' style={{display: displayStyle}} onClick={() => {openAddMovieMenu(display[1])}}>add</div>
  )
}
