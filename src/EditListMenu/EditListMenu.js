import React,{useState, useEffect} from 'react'
import './EditListMenu.css'

export default function EditListMenu({lists, setLists}) {

    const [content, setContent] = useState()
    
    useEffect(() => {
        let temp = []

        for(let i = 0; i < lists.length; i++) {
            temp.push(
                <div key = {i} className ="list-delete-row">
                    <span className = "material-icons list-delete-button" onClick = {() => deleteList(lists[i].name)}>
                        delete
                    </span>
                
                    <span className ="edit-list">
                        {lists[i].name}
                    </span>
                </div>
            )
        }
        setContent(temp)
    }, [lists,lists.length])

     
    function deleteList(name) {
        let temp = [...lists]
        for(let i = 0; i < temp.length; i++)
            if(temp[i].name === name) {
                temp.splice(i, 1)
                setLists(temp)
            }
    }

  return (
    <>
        <h3>
            Remove lists
        </h3>
        {content}

    </>
  )
}
