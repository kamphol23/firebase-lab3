import React from 'react';
import './../App.css'
import 'firebase/firestore';
import DeletingRecipe from './DeletingRecipe';



const DicplayDatabase = (props) => {

let list = null;

if( props.listFromDatabase ) {

		list = props.listFromDatabase.map(	recipe => (
    		<DeletingRecipe key={recipe.id} recipe={recipe}/>
		));
	}



return(
  <div>

  	<ul> {list} </ul>

  </div>
)
}

export default DicplayDatabase;
