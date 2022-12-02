import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ListCards extends React.Component {
  render() {
    const { listCards, removeCard } = this.props;
    return (
      <ul>
        {listCards.map((card) => (
          <li key={ card.cardName }>
            <Card { ...card } />
            <button
              data-cardname={ card.cardName }
              type="button"
              data-testid="delete-button"
              onClick={ removeCard }
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ListCards.propTypes = {
  listCards: PropTypes.arrayOf,
  removeCard: PropTypes.func,
}.isRequired;

export default ListCards;
