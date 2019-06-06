import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import './../App.css'

const defaultState = {
    newRecipe:'',
    ingredienser:'',
    howToDo:'',
  }

class  AddingToRecipe extends Component {
  state = defaultState;


handleAdd = e => {
		let obj = { name: this.state.newRecipe,
     ingredienser: this.state.ingredienser,
      howToDo: this.state.howToDo};
		const collectionRef = firebase.firestore().collection('recipe');
		collectionRef.add(obj)
		.then(() => {

		})
		.catch(error => {

		})
    this.setState({defaultState});
	}

  render() {
		return (
			<div className="addingPage">
			 <h2> Skriv in namnet på rätten:</h2>

        <br/>

			<input type="text" value={this.state.newRecipe}
			 	onChange={e => this.setState({ newRecipe: e.target.value })}  placeholder="Namnet" />

        <p> Skriv in ingredienser for matätten</p>

        <textarea type="text" value={this.state.ingredienser}
        onChange={e => this.setState({ingredienser: e.target.value})}
        rows="6" cols="60"/>

        <p> Gör så här </p>

        <textarea type="text" value={this.state.howToDo}
        onChange={e => this.setState({howToDo: e.target.value})}
        rows="6" cols="60"/>
        <br/>
			<button onClick={this.handleAdd}>Lägg till</button>
			</div>
		)
	}


}

export default AddingToRecipe;
