import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid'; 
import EditArticleComp from "./editArticleComp";
import DisplayArticleComp from "./displayArticleComp";
function ContentListComp(props) {
      
        const [articleArr, updateArticleArr] = useState(props.articleArr);
        
        const addNewArticle = () =>{
                updateArticleArr([...articleArr,{articleId : createUUID(), text : "", state: "EDIT"}])
        }
        const createUUID = () =>{
                return uuidv4();
        }
        const handleArticleState = (articleObj) =>{  
                const articleArrClone = [...articleArr];
                updateArticleArr(articleArrClone); 
                let articleIndex = articleArrClone.findIndex(object => object.articleId === articleObj.articleId);
                articleArrClone[articleIndex] = articleObj;
                updateArticleArr(articleArrClone); 
                props.changeArticleState(articleArrClone);
        }
        const handleDeleteArticle = (articleObj) =>{
                const articleArrClone = [...articleArr];
                let articleIndex = articleArrClone.findIndex(object => object.articleId === articleObj.articleId);
                articleArrClone.splice(articleIndex, 1);
                updateArticleArr(articleArrClone); 
                props.changeArticleState(articleArrClone);
        }
    return (
        
            <div className = "content">
            <button onClick = {props.onRemoveArtcile}>Cancel</button>
            <button onClick = {addNewArticle}>Add Article</button>
            <div className = "articleContentDiv">
                {articleArr.map((article, index) =>{
                   return article.state === 'EDIT' ?  
                   (<EditArticleComp key = {article.articleId} articleNum = {index +1} articleObj = {article}  changeArticleState = {handleArticleState}  />) :
                   (<DisplayArticleComp key = {article.articleId}  articleNum = {index +1} articleObj = {article} removeArticle = {handleDeleteArticle} changeArticleState = {handleArticleState}/>)

                })
                        
                }            
            </div>
            </div>
    );
  }
  export default ContentListComp;