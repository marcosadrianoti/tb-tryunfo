import React from 'react';
import PropTypes from 'prop-types';

class FilterByName extends React.Component {
  render() {
    const { filterAnyThing, disableFilters } = this.props;
    return (
      <input
        disabled={ disableFilters }
        type="text"
        data-testid="name-filter"
        placeholder="Nome da carta"
        onChange={ filterAnyThing }
      />
    );
  }
}

FilterByName.propTypes = {
  filterAnyThing: PropTypes.func,
  disableFilters: PropTypes.bool,
}.isRequired;

export default FilterByName;
