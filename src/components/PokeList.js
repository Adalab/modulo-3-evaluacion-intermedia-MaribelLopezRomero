import React from 'react';
import '../stylesheets/App.scss';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    const pokeCards = this.props.data;
    pokeCards.map((card) => {
      return (
        <li key={card.id}>
          <Pokemon name={card.name} url={card.url} type={card.types} />
        </li>
      );
    });
    return <ul>{pokeCards}</ul>;
  }
}

export default PokeList;
