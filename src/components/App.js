import React from 'react';
import '../stylesheets/App.scss';
import pokemons from '../data/pokemons.json'
import PokeList from './PokeList';
import Pokemon from './Pokemon';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   data: {pokemons}
    };
  render() {
    return (
      <>
      <PokeList data = {pokemons}/>
      </>
    );
  }
};

export default App;
