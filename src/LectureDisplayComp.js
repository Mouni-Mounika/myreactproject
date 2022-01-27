import React, {useState, useEffect} from "react"; 
import ContentListComp from "./contentListComponent";

function LectureDisplay(props) {
     const [lectureObj, updateLectureObj] = useState(props.lectureObj);
    useEffect(()=> {
    if(lectureObj.lectureState === 'EDIT')
      {
        props.onEdit(lectureObj);
      }
  });

    const handleEditLecInput = (event) =>{
    const lecture = {...lectureObj,...{lectureState: "EDIT"}};
    updateLectureObj(lecture);
    }
    const handleOnRemoveLec = (event) =>{
    props.onRemoveLec(lectureObj);
    }   

const setArticleStateToList = () =>{
    const lecture = {...lectureObj,...{articleStatus: true}};
    updateLectureObj(lecture);
    props.onEdit(lecture);
    }

  const  changeArticleState = (articleArr) =>{
    const lecture = {...lectureObj,...{article: articleArr}};
    updateLectureObj(lecture);
    props.onEdit(lecture);
    }

  const removeAtricle = () =>{
    const lecture = {...lectureObj,...{articleStatus: false}};
    updateLectureObj(lecture);
}
    return (
        <div className = "addNewLecture">
            <label>Lecture{props.lecNum}: {lectureObj.lectureName} </label>
            <br></br>
            <label>Start Date: {lectureObj.startDate.toString().slice(0,15)} </label>
            <br></br>
            <label>End Date: {lectureObj.endDate.toString().slice(0,15)} </label>
            <br></br>
            <button onClick = {handleEditLecInput}>Edit</button>
            <button onClick = {handleOnRemoveLec}>Remove</button>
            <button onClick = {setArticleStateToList} >Content</button>
            {
                lectureObj.articleStatus && <ContentListComp key = {lectureObj.id + "articleList"} articleArr= {lectureObj.article} 
                onRemoveArtcile = {removeAtricle} changeArticleState = {changeArticleState} />
            }
        </div> 
    );
  }
  export default LectureDisplay;