import React, {useState} from "react"; 
function ArticleListComp(props) {
        const [lectureObj, updateLectureObj] = useState(props.lecObj)
        const handleOnCancel = (event) =>{
                
        }
        const addEditComp = (event) => {
                const lecture = {...lectureObj,...{articleStatus: true, article:{ text : props.lecObj.article.text, state: "EDIT"}}};
                updateLectureObj(lecture);
                props.handleAddArticle(lectureObj);
        }
    return (
        
            <div className = "content">
            <button onClick = {handleOnCancel}>Cancel</button>
            <button onClick = {addEditComp}>Add Article</button>
            </div>
    );
  }
  
  export default ArticleListComp;