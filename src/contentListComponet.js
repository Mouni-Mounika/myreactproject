import React from 'react';

function ContentList(props) {
    return(
        <div id = "contentSubDivId" >
            <button id = "btnArticle" onClick ={props.addContent}>Article</button>
            <button className = "classRemoveContent" onClick = {props.cancel} >Remove</button>
        </div>
    );
}

export default ContentList;