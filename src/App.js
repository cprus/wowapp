import React, { Component } from 'react';
import './App.css';
import SearchCharacters from './components/SearchCharacters';
import CharacterInfo from './components/CharacterInfo';
import API_KEY from './config';

const KEY = API_KEY;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      character: [],
    };
  }
  //tichondrius/55/183003191-avatar.jpg
  
  // if (this.state.character) {
  //   return <CharacterInfo />
  // }

  getCharacter = (realm, name) => {
    fetch(`https://us.api.battle.net/wow/character/${realm}/${name}?fields=appearance&locale=en_US&apikey=${KEY}`)
      .then(response => response.json())
      .then(
        (result) => {
        this.setState({ 
          character: result 
        });
        console.log(this.state);
      });
  }


  render() {
    return (
      <div className="App">
        <SearchCharacters onSearch={this.getCharacter} />
        <CharacterInfo character={this.state.character} />
      </div>
    );
  }
}

export default App;
