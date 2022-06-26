import React,{ useContext } from 'react'
import './SettingsButton.css'
import '../Buttons.css'
import {PopupContext} from '../App.js'
import {openWindow} from '../PopupWindow/PopupWindow.js'

function openSettings(setter) {
  openWindow(setter)
}


export default function SettingsButton() {

  let display = useContext(PopupContext).settingsWindow

  return (
    <>
      <div className = "settings-button material-icons button" onClick={() => openSettings(display[1])}>
          settings
      </div>
    </>
    
  )
}
