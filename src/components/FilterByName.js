import React from 'react';
import PropTypes from 'prop-types';

class FilterByName extends React.Component {
  render() {
    const { filterByName, disableFilters } = this.props;
    return (
      <input
        disabled={ disableFilters }
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
  disableFilters: PropTypes.bool,
}.isRequired;

export default FilterByName;
