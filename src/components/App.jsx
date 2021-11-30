import React, { useState } from "react"
import Header from "./Header"
import Note from "./Note"
import Footer from "./Footer"
import CreateArea from "./Create"

function App(){
    const [newItem, setNewItem] = useState([])

    const addItem = (inputText) => {
        setNewItem(newItem => {return ([...newItem, inputText])})
    }

    const removeItem = (id) => {
        const updateItem = newItem.filter((item, index) => {
            return index !== id
        })
        setNewItem(updateItem)
    }

    return(
        <><Header />
        <CreateArea onAdd={addItem} />
        {newItem.map((note, index) => 
            <Note 
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                deleteItem={removeItem}
            />
        )}
        <Footer /></>
    )
}

export default App