import React from 'react';
import PropTypes from 'prop-types';

class FilterByRare extends React.Component {
  render() {
    const { filterByName } = this.props;
    return (
      <select
        name="cardRare-filter"
        data-testid="rare-filter"
        // value={ cardRare }
        onChange={ filterByName }
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
  filterByName: PropTypes.func,
}.isRequired;

export default FilterByRare;
