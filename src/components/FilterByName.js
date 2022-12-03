import React from 'react';
import PropTypes from 'prop-types';

class FilterByName extends React.Component {
  render() {
    const { filterByName } = this.props;
    return (
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Nome da carta"
        onChange={ filterByName }
      />
    );
  }
}

FilterByName.propTypes = {
  filterByName: PropTypes.func,
}.isRequired;

export default FilterByName;
