import React, {useState, useEffect} from "react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend' 
import './App.css';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import update from 'immutability-helper';
import LinearProgress from '@mui/material/LinearProgress';
import LectureInputComp from './LectureInputComp.js';
import LectureDisplayComp from './LectureDisplayComp.js';

function App() {
  const [lectureArr, updateLecture] = useState([]);
  const [loadingStatus, updateLoadingStatus] = useState('loading')
  function generateUUID(){
    return uuidv4();
  }
  function addNewLecture (event){
    updateLecture([...lectureArr, { id: generateUUID(), 
      lectureState: "EDIT", lectureName: "", articleStatus: false, article: []}]);
  }
  console.log(lectureArr);

  function saveLec(lectureObj){
    console.log(lectureObj);
    const updatedLectureArr = [...lectureArr];
    let lecObjIndex = updatedLectureArr.findIndex(obj => obj.id === lectureObj.id);
    updatedLectureArr[lecObjIndex] = lectureObj;
    updateLecture(updatedLectureArr);
  }
 function removeLec (lectureObj){
   const updatedLectureArr = [...lectureArr];
   let lecObjIndex = updatedLectureArr.findIndex(obj => obj.id === lectureObj.id)
   updatedLectureArr.splice(lecObjIndex, 1);
   updateLecture(updatedLectureArr);
   console.log(lectureArr);
 } 
 
const moveCard = (dragIndex, hoverIndex) => {
  const dragCard = lectureArr[dragIndex];
  updateLecture(update(lectureArr, {
      $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
      ],
  }));
};
  return (
    <DndProvider backend={HTML5Backend}>
    <div className ="classAddNewSession" >
    <button onClick = {addNewLecture} >ADD</button>
        {lectureArr.map((lecObj, index) =>{
          return <Card key={lecObj.id} index={index} text = {
            lecObj.lectureState === 'EDIT' ? 
          <LectureInputComp key = {lecObj.id} lectureObj = {lecObj} lecNum = {index + 1}  onSave = {saveLec} onRemoveLec = {removeLec} /> :
          <LectureDisplayComp  key = {lecObj.id} lectureObj = {lecObj} lecNum = {index + 1} onRemoveLec = {removeLec} onEdit = {saveLec} />
          } id={lecObj.id} moveCard={moveCard}>
          </Card>
          })
        }
    </div>
    </DndProvider>
  );
}
export default App;