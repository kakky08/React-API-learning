import React, {useEffect, useState} from "react";
import './App.css';

const App = () => {

  // APIのID
  const App_ID = "2db12816";
  // APIのキー
  const App_Key = "c75ec282e143a8a3c4e569b08605c4a3";

  const[recipes, setRecipes] = useState([]);

  // レシピ検索のリクエスト

    useEffect(async() => {
        getRecipes();
    },[]);

    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key=${App_Key}`);
      const data = await response.json();
      setRecipes(data.hits);
    }
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>

    </div>
  );
}

export default App;
