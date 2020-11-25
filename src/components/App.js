import React from 'react';
import '../stylesheets/App.scss';
import pokemons from '../data/pokemons.json';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemons,
    };
  }
  render() {
    const pokemonData = this.state.pokemons;
    return (
    <main>
    <PokeList data={pokemonData} />;
    </main>
    )
  }
}

export default App;
