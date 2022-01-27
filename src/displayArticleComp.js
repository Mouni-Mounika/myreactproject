import React, {useState} from "react"; 

function DisplayArticleComp(props) {
    const [objectArticle, updateArticleObj] = useState(props.articleObj)
         const handleEditArticle = () =>{
            const  articleObj = {...objectArticle,...{state: "EDIT"}};
            updateArticleObj(articleObj);
            props.changeArticleState(articleObj);
    }
        const removeArticle = () =>{
        props.removeArticle(objectArticle);
    }
    return (
            <div>
                <label>Article{props.articleNum}: {objectArticle.text}</label>
                <br></br>
                <button onClick = {removeArticle}>Remove</button>
                <button onClick = {handleEditArticle}>Edit</button>
            </div>
    );
  }
  export default DisplayArticleComp;