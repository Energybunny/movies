import React, {useState, useEffect} from 'react'
import './Main.css'
import '../Colours.css'
import ListSelectionBar from '../ListSelectionBar/ListSelectionBar'
import MovieCard from '../MovieCard/MovieCard'
import AddMovieCard from '../MovieCard/AddMovieCard'


const emptyList = {
  name: "§--empty", 
  element: "", 
  contents: []
} 

export default function Main({currentList, setCurrentList, lists, setLists}) {

  let [currentContent, setCurrentContent] = useState()

  useEffect(() => {
    setCurrentContent(currentContent => [])

    let check = false
    for(let i = 0; i < lists.length; i++) {
      if(lists[i].name === currentList.name) check = true
      
    }
    if(!check) {
      setCurrentList(emptyList)
      return
    }

    for(let i = 0; i < currentList.contents.length; i++) {
      let newElement = <span key = {i}>
        <MovieCard content = {currentList.contents[i]} currentList= {currentList} currentListSetter = {setCurrentList}/>
      </span>
      setCurrentContent(currentContent => [...currentContent, newElement])
    }    
  }, [currentList, currentList.contents.length, lists, lists.length])

  return (
    <>
        <ListSelectionBar currentListSetter = {setCurrentList} lists = {lists} setLists = {setLists}/>
         <div className = "main-section">
            <span>            
              <AddMovieCard currentList = {currentList}/>
            </span>
            {currentContent}
        </div>
    </>
  )
}
