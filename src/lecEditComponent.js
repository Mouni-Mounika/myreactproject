import React, {useState} from "react"; 
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import LectureInputComp from './lectureInputComp.js';
import LectureDisplayComp from './lectureDisplayComp';


function App() {
  const [lectureArr, updateLectureArr] = useState([]);
  console.log(lectureArr);
  function addNewLecture (event){
    updateLectureArr([...lectureArr, { id: createUUID(), lectureState: "EDITLECNAME", lectureName: "", articleStatus: false, article:{text:"", state: "edit"}}]);
  }

  const handleOnSave = (lectureObj) =>{
    const updatedLectureArr = [...lectureArr];
    let lecObjIndex = updatedLectureArr.findIndex(obj => obj.id === lectureObj.id);
    updatedLectureArr[lecObjIndex] = lectureObj;
    updateLectureArr(updatedLectureArr);
  }
 const handleOnRemoveLec = (lectureObj) =>{
   const updatedLectureArr = [...lectureArr];
   let lecObjIndex = updatedLectureArr.findIndex(obj => obj.id === lectureObj.id)
   updatedLectureArr.splice(lecObjIndex, 1);
   updateLectureArr(updatedLectureArr);
   console.log(lectureArr);
 } 
 
function createUUID(){
 
  return uuidv4();
}
  return (
   
      <div className ="addNewLectureContain" >
            <div className = "addButton" >
                    <input type = "button"   id = "addNewLecture" onClick={addNewLecture} value = "ADD" ></input>
                    <button id = "saveLectures" >Save</button>
          </div>
          {lectureArr.map((lecObj, index) =>{
            return lecObj.lectureState === 'EDITLECNAME' ? 
            <LectureInputComp key = {lecObj.id} lectureObj = {lecObj} lecNum = {index + 1}  onSave = {handleOnSave} onRemoveLec = {handleOnRemoveLec} /> :
            <LectureDisplayComp  key = {lecObj.id} lectureObj = {lecObj} lecNum = {index + 1}  onRemoveLec = {handleOnRemoveLec} setLecEditState = {handleOnSave} />;

            })
          }
      </div>
    
    
  );

}

export default App;