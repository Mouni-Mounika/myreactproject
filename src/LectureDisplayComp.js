import React, { useState, useEffect} from 'react';
import ContentList from './contentListComponet.js';
import EditArticleComp from './editArticleComp';
import DisplayArticle from './displayArticleComp';

function LectureDisplay(props) {
    const [lecture, updateLecture] = useState(props.object);

    useEffect(() => {
        if(lecture.state === 'EDIT') {
            props.onEdit(lecture);
        }
    });
    
    function removeLecture(event){
        props.remove(lecture)
    } 

    function editLecture(event) {
        const updatedLec = {...lecture,...{state: 'EDIT'}};
        updateLecture(updatedLec);
    }

    function changeArticleStatus(event) {
        const tempLec = {...lecture,...{articleStatus: true, 
            article:{...lecture.article, state: 'LIST'}}}
        updateLecture(tempLec);
        props.onEdit(tempLec);
    }

    function setArticleStateEdit(event) {
        const tempLec = {...lecture,...{article:{...lecture.article, state: 'EDIT'}}}
        updateLecture(tempLec);
        props.onEdit(tempLec);
    }
    function removeArticle(event) {
        const tempLec = {...lecture,...{articleStatus: false,
            article:{content:"", state: 'LIST'}}}
        updateLecture(tempLec);
        props.onEdit(tempLec);
    }

    function saveContent(updatedArtObj) {
        const tempLec = {...lecture};
        tempLec.article.content = updatedArtObj.content;
        tempLec.article.state = updatedArtObj.state;
        updateLecture(tempLec);
        props.onEdit(tempLec);
    }

    return(
        <div className = "Lecture">
            <label>Lecture {props.index + 1}: {lecture.name} </label>
            <button onClick = {removeLecture} >Remove</button>
            <button onClick = {editLecture} >Edit
            </button>
            <button onClick = {changeArticleStatus}>Content</button>
            {
                lecture.articleStatus?
                lecture.article.state === 'LIST'? <ContentList key = {lecture.id + "content"} 
                addContent = {setArticleStateEdit} cancel = {removeArticle}/>:
                lecture.article.state === 'EDIT'? <EditArticleComp key = {lecture.id + "content"} 
                articleObj = {lecture.article} removeArticle = {changeArticleStatus} onSave = {saveContent}/>:
                <DisplayArticle key = {lecture.id +"article"} content = {lecture.article.content} edit = {setArticleStateEdit} cancel = {changeArticleStatus}/>: null
            }
        </div>
    );
}

export default LectureDisplay;
