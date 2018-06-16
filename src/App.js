import React, { Component } from 'react';
import './App.css';
import SearchCharacters from './components/SearchCharacters';
import CharacterInfo from './components/CharacterInfo';

//const API_KEY = 'qkcjrpr6qbu2pky3pxs594bg5tsq28v2';
//const secret = 'tHspQB2wVA6grPHzWAntDKCEDMVdBwhw';
//const ROOT_URL = `https://us.api.battle.net/wow/character/Tichondrius/Elguero?locale=en_US&apikey=${API_KEY}`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      character: [],
    };
    this.getCharacter = this.getCharacter.bind(this);
  }
  // componentDidMount() {
  //   fetch('https://us.api.battle.net/wow/character/Tichondrius/Elguero?fields=appearance&locale=en_US&apikey=qkcjrpr6qbu2pky3pxs594bg5tsq28v2')
  //     .then(response => response.json())
  //     .then(
  //       (result) => {
  //       this.setState({ 
  //         character: result 
  //       });
  //       console.log(this.state);
  //     })
  // }

  getCharacter(realm, name) {
    fetch(`https://us.api.battle.net/wow/character/${realm}/${name}?fields=appearance&locale=en_US&apikey=qkcjrpr6qbu2pky3pxs594bg5tsq28v2`)
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
