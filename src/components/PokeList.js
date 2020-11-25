import React from 'react';
import '../stylesheets/App.scss';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';

class PokeList extends React.Component {
  render() {
    const pokeCards = this.props.data;
    const itemsPokeCards = pokeCards.map((card) => {
      return (
        <li className='itemCard' key={card.id}>
          <Pokemon name={card.name} url={card.url} type={card.types} />
        </li>
      );
    });
    return <ul className='listcard'>{itemsPokeCards}</ul>;
  }
}

export default PokeList;
