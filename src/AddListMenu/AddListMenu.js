import React, {useRef} from 'react'
import './AddListMenu.css'

export default function AddListMenu({lists, setLists}) {
  let userInput = useRef()

  function createList(input) {
    let name = input.current.value
    for(let i = 0; i < lists.length; i++) 
      if(lists[i].name === name) return

    setLists(lists => [...lists, {
      name: name,
      contents: []
    }])
    input.current.value = null
  }
  
  return (
    <>
      <h3>
        Add a new list
      </h3>
      <p>
        Every list <b><i>must</i></b> have a unique name
      </p>
      <input type="text" placeholder='List name' ref = {userInput}></input>
      <input type="submit" onClick={() => createList(userInput)}></input>
    </>
  )
}
