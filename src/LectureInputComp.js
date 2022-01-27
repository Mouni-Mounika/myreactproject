import React, {useState, useEffect} from "react"; 

function LectureInputComp(props) {
  const [lectureObj, updateLectureObj] = useState(props.lectureObj);

  useEffect(()=> {
    if(lectureObj.lectureState === 'DISPLAY')
    {
      props.onSave(lectureObj);
    }
  });
  
  function handleInputValue(event){
    const lecture = {...lectureObj,...{lectureName:event.target.value}};
    updateLectureObj(lecture);
  }
  
  const handleOnSave = (event) =>{
    const lecture = {...lectureObj,...{lectureState:"DISPLAY"}};
    updateLectureObj(lecture);
  }
  const handleOnRemoveLec = (event) =>{
    props.onRemoveLec(lectureObj);
}
 
    return (
      <div key = {props.lecIndex} className = "addNewLecture">
        <div    id = {"section" + props.lectureObj.id} className = "sections">
            <label>Lecture {props.lecNum}: </label>
            <input   id ={"inputEle" + props.lectureObj.id} type = "text" onChange={handleInputValue} className = "lectureName" maxLength = {80} placeholder = "Enter Lecture name"  value = {lectureObj.lectureName} />
            <div  id = {"saveAndRemoveBtn" + props.lectureObj.id} className = "saveAndCancleButtonsContainer" >
                <button  className = "Remove" onClick = {handleOnRemoveLec}>Remove</button>
                <button  className ="saveLectureName" onClick ={handleOnSave}>Save Lecture</button>
            </div>
            
        </div>
      </div> 
    );
  }
  
  export default LectureInputComp;