import React, {useRef, useContext} from 'react'
import './SettingsMenu.css'
import '../Colours.css'

import {LOCAL_STORAGE_HEADER_KEY} from '../App.js'

const lightTheme = "#FFFEFF"
const darkTheme = "#02233a"
const defaultBackground = "https://cdn.discordapp.com/attachments/563630157123026945/990363668543856660/test.png"

const colour = [lightTheme, darkTheme]

const colourThemeKey = "MovieCollectorV2.ColourTheme"

let colourTheme

function changeHeaderBackground(input, imageUrlKey) {
  let value = input.current.value
  if(input.current.value.length === 0){
    value = defaultBackground
  }
  document.getElementById('header-section').style.backgroundImage = "url(" + value + ")" 
  localStorage.setItem(imageUrlKey, JSON.stringify(input.current.value))
  input.current.value = null
}

function selectColourTheme(index) {
  colourTheme = index
  document.documentElement.style.setProperty('--background-colour',colour[colourTheme]);
  localStorage.setItem(colourThemeKey, JSON.stringify(colourTheme))

}


export default function SettingsMenu( ) {
  colourTheme = JSON.parse(localStorage.getItem(colourThemeKey))
  document.documentElement.style.setProperty('--background-colour',colour[colourTheme]);


  const imageUrlKey = useContext(LOCAL_STORAGE_HEADER_KEY)

  let linkInput = useRef()

  return (
    <div className ="settings-menu">
        <h2>Settings</h2>
        <h3>
          Header: 
        </h3>
        <span className ="material-icons search-bar">link</span>
        <input className = "search-bar" type="text" placeholder='Image link' ref = {linkInput}></input> 
        <input type="submit" onClick={() => changeHeaderBackground(linkInput, imageUrlKey)}></input>

        <h3>
          Colour theme: 
        </h3>
        <div className ="light-mode colour-theme" onClick={() => {selectColourTheme(0)}}></div>
        <div className ="dark-mode colour-theme" onClick={() => {selectColourTheme(1)}}></div>
    </div>
  )
}
