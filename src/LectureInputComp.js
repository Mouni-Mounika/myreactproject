import React, { useState, useEffect } from 'react';

function LectureEdit(props) {
    const [lecture, updateLecture] = useState(props.object);

    useEffect(() => {
        if(lecture.state === 'DISPLAY') {
            props.onSave(lecture);
        }
    });

    const handleOnChange = (event) => {
        const updatedLec = {...lecture,...{name: event.target.value}}
        updateLecture(updatedLec);
    }

    const handleOnSave = (event) => {
        const updatedLec = {...lecture,...{state: 'DISPLAY'}}
        updateLecture(updatedLec);
    }
    function cancelLecture(event) {
        props.cancel(lecture)
    }
    return(
        <div id ="newLecture" >
                <label>Lecture {props.index + 1}: </label> 
                <input type="text" placeholder="Enter lecture name" value = {lecture.name} onChange = {handleOnChange}></input>
                <br></br>
                <button className = "btnRemove" onClick = {cancelLecture}>Delete</button>
                <button type="submit" className = "saveTitle" onClick = {handleOnSave} >Save Lecture</button>
        </div>
    );
}
export default LectureEdit;
