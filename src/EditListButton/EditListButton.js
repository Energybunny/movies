import React, {useContext} from 'react'
import '../AddListButton/AddListButton.css'
import '../Buttons.css'

import {PopupContext} from '../App.js'
import {openWindow} from '../PopupWindow/PopupWindow.js'

function openListEdit(setter) {
    openWindow(setter)
}

export default function EditListButton() {

    let display = useContext(PopupContext).editListWindow


  return (
    <div className="add-list-button material-icons button" onClick = {() => {openListEdit(display[1])}}>
        edit
    </div>
  )
}
