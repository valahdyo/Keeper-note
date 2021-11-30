import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
// import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    })

    const handleChange = ({target: {name, value}}) => {
        setInputText(inputText => {
            return {
                ...inputText,
                [name]: value
            }
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        props.onAdd(inputText)
        setInputText({
            title: "",
            content: ""
        })
    }

    const expand = () => setExpanded(true)

  return (
    <div>
      <form className="create-note">
      {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={inputText.title}
            placeholder="Title"
          />
        )}
        <textarea onChange={handleChange} onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={inputText.content} />
        {/* <Zoom in={isExpanded} /> */}
        <Fab onClick={handleClick}/>
        <button onClick={handleClick}><AddIcon></AddIcon></button>
        
      </form>
    </div>
  );
}

export default CreateArea
