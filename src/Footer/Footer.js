import React from 'react'
import './Footer.css'
import '../Colours.css'

export default function Footer() {
  return (
    <div className='footer-section'>
        <span>Created by Daniel Wilsson</span>
        <span>Movie data fetched from <a href="https://www.themoviedb.org/">TheMovieDB</a></span>
    </div>
  )
}
