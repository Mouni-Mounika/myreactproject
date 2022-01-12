import React from 'react';

function DisplayArticle(props) {
    return(
        <div id = "articleId" >
            <label>Article: {props.content} </label>
            <button  onClick = {props.edit} >Edit</button>
            <button onClick = {props.cancel} >Remove
            </button>
        </div>
    );
}
export default DisplayArticle;