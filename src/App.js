import React, {useState, useEffect}  from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import AddingToRecipe from './component/AddingToRecipe'
import DicplayDatabase from './component/DicplayDatabase'


const App = () => {
    const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    const db = firebase.firestore();
    const recipeCollection = db.collection('recipe');
    recipeCollection.onSnapshot(snapshot => {
      let list = [];
      snapshot.forEach(doc => {
        let obj = {
          ...doc.data(),
          id: doc.id
        };
        list.push(obj);
      })
      setRecipeData(list);
    })
  }, [])



  return (
    <div className="App">
    <AddingToRecipe/>

      <DicplayDatabase listFromDatabase={recipeData}/>
    </div>
  );
}

export default App;
