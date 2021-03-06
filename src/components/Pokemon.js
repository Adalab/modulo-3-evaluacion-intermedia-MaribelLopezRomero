import React from 'react';
import '../stylesheets/Pokemon.scss';

class Pokemon extends React.Component {
  render() {
    const itemsType = this.props.type.map((types, i) => {
      return <li key={i}>{types}</li>;
    });
    return (
      <div className='pokeCards'>
        <img
          src={this.props.url}
          alt={this.props.name}
          title={this.props.itile}
        />
        <h2>{this.props.name}</h2>
        <ul>{itemsType}</ul>
      </div>
    );
  }
}

export default Pokemon;
