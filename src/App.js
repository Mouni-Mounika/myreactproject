import React, { useState} from 'react';
import './App.css';
import { v4 as uuidv4} from 'uuid';
import LectureInputComp from './LectureInputComp';
import LectureDisplayComp from './LectureDisplayComp';

function App() {
  const [lectureArr, updateLecture] = useState([])
  console.log(lectureArr);

  function generateUUID()
  {
    return uuidv4();
  }

  function addNewLecture() {
    updateLecture([...lectureArr, {id: generateUUID(), name: "", state: "EDIT", articleStatus: false, article: {content:"", state:""}}])
  }
  
  function removeLec(lecObj) {
    const lectArrayClone = [...lectureArr];
    const indexToDelete = lectArrayClone.findIndex(lecture => lecture.id === lecObj.id);
    lectArrayClone.splice(indexToDelete, 1);
    updateLecture(lectArrayClone);
  }
  
  function saveLec(lecObj) {
    const lectArrayClone = [...lectureArr];
    const indexToUpdate = lectArrayClone.findIndex(lecture => lecture.id === lecObj.id);
    lectArrayClone[indexToUpdate]=lecObj;
    updateLecture(lectArrayClone);
  }

  return (
    <div className = "classAddNewSession" >
      <button className = "addNewLecture" onClick = {addNewLecture} >ADD</button>
      {lectureArr.map((lecture, index) => {
        if (lecture.state === 'EDIT') {
          return <LectureInputComp key={lecture.id} object = {lecture} index = {index} 
          cancel = {removeLec} onSave = {saveLec}/>;
        }
        if (lecture.state === 'DISPLAY') {
          return <LectureDisplayComp key = {lecture.id} object = {lecture} index = {index} remove = {removeLec} onEdit = {saveLec}/>;
        }
        
      })}
    </div>
  );
}
export default App;