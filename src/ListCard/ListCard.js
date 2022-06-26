import React from 'react'
import './ListCard.css'
import '../Buttons.css'


export default function ListCard({name}) {
  return (
    <div className ="list-card button">
        <span className="text">
          {name}
        </span>
    </div>
  )
}
