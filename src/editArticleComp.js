import React, { useState, useEffect } from 'react';

function EditArticleComp(props) {
   
    const[article, updateArticle] = useState(props.articleObj);
    
    const handleOnChange = (event) => {
        const tempArticle = {...article,...{content: event.target.value}};
        updateArticle(tempArticle);
    }

    const handleOnSave = (event) => {
        const tempArticle = {...article,... {state: 'DISPLAY'}}
        updateArticle(tempArticle);
        props.onSave(tempArticle);
    }

    return(
        <div>
            <textarea id = "textAreaId" rows = "3" cols = "30" 
            placeholder = "Enter Article" value = {article.content} onChange = {handleOnChange} ></textarea>
            <button onClick = {handleOnSave}>Save</button>
            <button onClick = {props.removeArticle} >Remove
            </button>
        </div>
    );
}
export default EditArticleComp;