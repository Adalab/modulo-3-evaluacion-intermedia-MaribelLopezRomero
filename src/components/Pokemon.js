import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <>
        <div>
          <img
            src={this.props.url}
            alt={this.props.name}
            title={this.props.itile}
          />
          <h2>{this.props.name}</h2>
          <ul></ul>
        </div>
      </>
    );
  }
}

export default Pokemon;
