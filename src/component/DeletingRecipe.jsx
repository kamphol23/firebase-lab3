import React, {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


const DeletingRecipe = ({recipe}) => {
const [editMode, setEditMode] = useState(false);
const [inputName, setInputName] = useState(recipe.name);
const [newIngredients, setNewIngredients] = useState(recipe.ingredienser);
const [newhowToDo, setNewIhowToDo] = useState(recipe.howToDo);

  let theRecipe = recipe.name;
  let theIngredienser = recipe.ingredienser
  let howToDo = recipe.howToDo

    const deleteTheRecipe = () => {
  		firebase.firestore().collection('recipe').doc(recipe.id).delete()
  	}

    const saveChanges = () => {
      setEditMode(false);
      firebase.firestore().collection('recipe').doc(recipe.id).update({ name: inputName,
      ingredienser: newIngredients})
    }

    const editTheRecipe = () =>{
        setEditMode(true);
	}

  if( editMode ) {
  theRecipe = (
    <input type="text"
      value={inputName}
      onChange={e => setInputName(e.target.value)}
      onBlur={saveChanges} />
  );

  theIngredienser = (<textarea type="text"
    value={newIngredients}
    onChange={e => setNewIngredients(e.target.value)}
    onBlur={saveChanges} rows="6" cols="60"> </textarea>)

    howToDo = ( <textarea type="text"
      value={newhowToDo}
      onChange={e => setNewIhowToDo(e.target.value)}
      onBlur={saveChanges} rows="6" cols="60"> </textarea>)
}

    return(
      <li>
      <h2> {theRecipe} </h2>
        <br/>
      <p> <strong> Ingredienser : </strong>  {theIngredienser}</p>
        <br/>
        <p> <strong> Gör så här : </strong>  {howToDo} </p>
      <br/>
      <button onClick={editTheRecipe}> Redigera</button>
    	<button onClick={deleteTheRecipe}> Ta bort </button>
      </li>
    )

}

export default DeletingRecipe;
