import React from 'react'
import './ListSelectionBar.css'
import '../Colours.css'
import AddListButton from '../AddListButton/AddListButton'
import EditListButton from '../EditListButton/EditListButton'
import ListCard from '../ListCard/ListCard'

function changeCurrentList(list, setter) {
  setter(list)
}

export default function ListSelectionBar({currentListSetter, lists, setLists}) {

  let contents = [...lists]
  let elements = []
  for(let i = 0; i < contents.length; i++) {
    elements.push(
      <span key = {i} onClick = {() => changeCurrentList(contents[i], currentListSetter)}>
        {<ListCard name = {contents[i].name}/>}
      </span>
    )
  }
//      element: <ListCard name={name}/>, 


  return (
    <div className="list-selection-bar">
        <AddListButton/>
        <EditListButton/>
        {elements}
    </div>
  )
}
