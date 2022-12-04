import React from 'react';
import PropTypes from 'prop-types';

class FilterByRare extends React.Component {
  render() {
    const { filterAnyThing, disableFilters } = this.props;
    return (
      <select
        name="cardRare-filter"
        data-testid="rare-filter"
        disabled={ disableFilters }
        // value={ cardRare }
        onChange={ filterAnyThing }
      >
        <option value="todas">todas</option>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
    );
  }
}

FilterByRare.propTypes = {
  filterAnyThing: PropTypes.func,
  disableFilters: PropTypes.bool,
}.isRequired;

export default FilterByRare;
