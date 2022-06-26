import React, {useContext} from 'react'
import './Header.css'
import '../Colours.css'
import { LOCAL_STORAGE_HEADER_KEY } from '../App'

export default function Header() {
  const imageUrlKey = useContext(LOCAL_STORAGE_HEADER_KEY)
  let url = JSON.parse(localStorage.getItem(imageUrlKey))
  let style = {}
  if(url.length > 0 ) {
    style = {
      backgroundImage: "url(" + url + ")"
    }
  }
   
  return (
    <div id ="header-section" style = {style}>
      <div id ="website-name">
        Movie Collector V2
      </div>
    </div>
  )
}
