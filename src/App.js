import React, {createContext, useState, useEffect} from 'react';
import './App.css';
import './Colours.css'
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import SettingsButton from './SettingsButton/SettingsButton';
import PopupWindow from './PopupWindow/PopupWindow';
import SettingsMenu from './SettingsMenu/SettingsMenu';
import AddMovieMenu from './AddMovieMenu/AddMovieMenu.js';
import AddListMenu from './AddListMenu/AddListMenu';
import EditListMenu from './EditListMenu/EditListMenu';
import { fireEvent } from '@testing-library/react';

export const PopupContext = createContext(); 
const headerUrlKey = "MovieCollectorV2.HeaderImage"
export const LOCAL_STORAGE_HEADER_KEY = createContext(headerUrlKey)
const listsKey = "MovieCollectorV2.StoredLists"

let loadedLists = JSON.parse(localStorage.getItem(listsKey))

const emptyList = {
  name: "§--empty", 
  element: "", 
  contents: []
} 

let localSetMovieContent

export function setMovieDetailsContent(content) {
  localSetMovieContent(content)
}

function App() {
  const [currentList, setCurrentList] = useState(emptyList)

  if(loadedLists == null) loadedLists = []
  const [lists, setLists] = useState([...loadedLists])
  const [movieContent, setMovieContent] = useState("")
  localSetMovieContent = setMovieContent

  useEffect(() => {
    if(lists.length === 0) return
    let index = -1
    for(let i = 0; i < lists.length; i++)
      if(lists[i].name === currentList.name) index = i 

    let temp = [...lists]
    temp[index] = currentList 
    setLists(temp)
    localStorage.setItem(listsKey, JSON.stringify([...lists]))
  }, [lists.length, currentList.contents, currentList.contents.length])

  useEffect(() => {
    localStorage.setItem(listsKey, JSON.stringify([...lists]))
  }, [lists])


  let PopupWindows = {
    settingsWindow: useState("none"), 
    addListWindow: useState("none"), 
    movieDetailsWindow: useState("none"), 
    addMovieWindow: useState("none"), 
    editListWindow: useState("none")
  }  
  return (
    <>
      <LOCAL_STORAGE_HEADER_KEY.Provider value = {headerUrlKey}>
        <PopupContext.Provider value = {PopupWindows}>
          <span id="page">
            <SettingsButton/>
            <Header/>
            <Main currentList = {currentList} setCurrentList = {setCurrentList} lists = {lists} setLists = {setLists} />
            <Footer/>
          </span>
        </PopupContext.Provider>
      </LOCAL_STORAGE_HEADER_KEY.Provider>
      <PopupWindow display = {PopupWindows.settingsWindow} contents = {<SettingsMenu/>}/>
      <PopupWindow display = {PopupWindows.addListWindow} contents = {<AddListMenu lists = {lists} setLists = {setLists}/>}/>
      <PopupWindow display = {PopupWindows.editListWindow} contents = {<EditListMenu lists = {lists} setLists = {setLists}/>}/>
      <PopupWindow display = {PopupWindows.movieDetailsWindow} contents = {movieContent}/>
      <PopupWindow display = {PopupWindows.addMovieWindow} contents = {<AddMovieMenu currentList = {currentList} listSetter = {setCurrentList}/>}/>  
    </>
  );
}

export default App;
