import React from 'react'
import './PopupWindow.css'


export function openWindow(displaySetter) {
    displaySetter("block")
    document.getElementById("page").style.opacity = 0.3
    document.getElementById("page").style.pointerEvents = "none"
}

function closeWindow(displaySetter) {
    displaySetter("none")
    document.getElementById("page").style.opacity = 1
    document.getElementById("page").style.pointerEvents = "auto"
}

export default function PopupWindow({display, contents}) {

    return (
    <div className = "popup-window" style = {{display: display[0]}}>
        <div className='popup-top-bar'>
            <div className='material-icons' onClick={() => closeWindow(display[1])}>
                close
            </div>
        </div>
        {contents}
    </div>
  )
}
