import React from 'react'
import './MovieDetailsMenu.css'

export default function MovieDetailsMenu({content, list, listSetter, listIndex}) {    

  function deleteMovie() {
    let temp = [...list.contents]
    temp.splice(listIndex, 1)
    let temp2 = {...list}
    temp2.contents = [...temp]
    listSetter(temp2)
  }

  let poster = "url(" + content.poster + ")"
  return (
    <>
        <div className="movie-delete-button material-icons" onClick={() => deleteMovie()}>delete</div>
        <div className ="movie-details">
          <h3>
              {content.title}
          </h3>
          <p>
              <b>Release date: </b><br></br>
              {content.release}
          </p>
          <b>Overview</b>
          <div>
              {content.description}
          </div>
          
        </div>
        <div className="movie-details-poster" style={{backgroundImage: poster}}></div>
      </>
  )
}
