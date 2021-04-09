import React from "react";

// API のレシピからタイトル・カロリー・画像を取得し表示
const Recipe = ({title,calories,image}) => {
    return(
      <div>
        <h1>{title}</h1>
        <p>{calories}</p>
        <img src ={image} alt=""></img>
      </div>
    )
}
export default Recipe;
