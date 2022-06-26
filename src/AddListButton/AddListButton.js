import React, {useContext} from 'react'
import './AddListButton.css'
import '../Buttons.css'

import {PopupContext} from '../App.js'
import {openWindow} from '../PopupWindow/PopupWindow.js'

function openListAdd(setter) {
  openWindow(setter)
}

export default function AddListButton() {

  let display = useContext(PopupContext).addListWindow

  return (
    <div className='add-list-button material-icons button' onClick={() => openListAdd(display[1])}>
        add
    </div>
  )
}
